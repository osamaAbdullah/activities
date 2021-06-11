import {db} from "./firebase";
import moment from "moment";
import {store} from "./vuex";

export async function allUsers() {
    return (await db.collection('users').get()).docs
}

export async function currentUser() {
    return await db.doc('users/' + store.getters.user.uid).get()
}

export async function checkUserActivities(user, log) {
    log(`checking for user (${user.data().name})`)
    let userActivities = await db.collection('user_activity')
        .where('userId', '==', user.id)
        .get();
    for (const userActivity of userActivities.docs) {
        let activity = await db.collection('activities').doc(userActivity.data().activityId).get();

        if (activity.data().type === 'daily' && activity.data().status) {
            let lastCheck = moment(userActivity.data().lastCheck.toDate()).startOf('day')
            let now = moment().startOf('day')
            log(`checking for Activity (${activity.data().title})`)
            // if lastCheck - now is more than a day
            while (lastCheck.diff(now, 'day')) {
                log(`checking for Day (${lastCheck.format('YYYY-MM-DD')})`)
                let userActivityId = `${activity.id}__${user.id}__${lastCheck.format('YYYY_MM_DD')}`

                let completedActivity = await db.doc(`completed_activities/${userActivityId}`).get()
                let alreadyMissed = await db.doc(`missed_activities/${userActivityId}`).get()

                if (completedActivity.exists) {
                    log('Passed')
                } else if (alreadyMissed.exists) {
                    log('Already paid')
                } else {
                    await db.collection('missed_activities').doc(userActivityId).set({
                        activityId: activity.id,
                        userId: user.id,
                        dateTime: new Date(),
                        missedDay: lastCheck.format('YYYY-MM-DD')
                    })
                    await db.collection('transactions').doc('mulct_' + userActivityId).set({
                        amount: activity.data().mulct,
                        type: 'mulct',
                        userId: user.id,
                        createdAt: new Date(),
                        missedActivityId: userActivityId,
                        activityId: activity.id
                    })
                    await db.collection('transactionLog').add({
                        user: user.data().name,
                        activity: activity.data().title,
                        date: lastCheck.format('YYYY-MM-DD'),
                        mulct: activity.data().mulct,
                        createdAt: moment().format('DD-MM-YYYY hh:mm:ss'),
                        by: store.getters.user.email
                    })
                    log(`"${user.data().name}" mulct for "${activity.data().title}" for "${lastCheck.format('YYYY-MM-DD')}" by "${activity.data().mulct}"ID at "${moment().format('DD-MM-YYYY hh:mm:ss')}" run By "${store.getters.user.email}"`)
                }
                await db.collection('user_activity').doc(user.id + '_' + activity.id).update({lastCheck: new Date()})
                lastCheck = lastCheck.add(1, 'day')
            }
        }
    }
}
