<template>
  <div class="flex justify-center w-2/6 mx-auto shadow overflow-hidden border-b border-gray-200 sm:rounded-lg my-6">
    <div class="text-2xl px-10 py-10">Check for missed Activities</div>
  </div>
  <div ref="logs" class="flex flex-col px-5 py-5 w-1/2 lg:w-2/3 sm:w-5/6 mx-auto shadow overflow-hidden border-b border-gray-200 sm:rounded-lg my-6">
  </div>
</template>

<script>
import {db} from '../../firebase'
import moment from 'moment';

export default {
  name: 'Users',
  data: () => ({
    activities: [],
  }),
  methods: {
    log(msg) {
      let child = document.createElement('H3')
      child.append(msg)
      child.classList.add('my-3');
      this.$refs['logs'].appendChild(child)
      console.log(msg)
    },
  },
  async mounted() {
    let users = await db.collection('users').get();
    for (const user of users.docs) {
      this.log(`checking for user (${user.data().name})`)
      let userActivities = await db.collection('user_activity')
          .where('userId', '==', user.id)
          .get();
      for (const userActivity of userActivities.docs) {
        let activity = await db.collection('activities').doc(userActivity.data().activityId).get();

        if (activity.data().type === 'daily') {
          let lastCheck = moment(user.data().lastCheck.toDate()).startOf('day');
          let now = moment().startOf('day');
          this.log(`checking for Activity (${activity.data().title})`)
          // if lastCheck - now is more than a day
          while (lastCheck.diff(now, 'day')) {
            this.log(`checking for Day (${lastCheck.format('YYYY-MM-DD')})`)
            let completedActivity = await db.collection('completed_activities')
                .where('userId', '==', user.id)
                .where('activityId', '==', activity.id)
                .where('dateTime', '>=', new Date(lastCheck.startOf('day').format()))
                .where('dateTime', '<=', new Date(lastCheck.endOf('day').format()))
                .get()

            let alreadyMissed = await db.collection('missed_activities')
                .where('userId', '==', user.id)
                .where('activityId', '==', activity.id)
                .where('missedDay', '==', lastCheck.format('YYYY-MM-DD'))
                .get()
            if (completedActivity.docs.length === 0 && alreadyMissed.docs.length === 0) {
              let ref = await db.collection('missed_activities').add({
                activityId: activity.id,
                userId: user.id,
                dateTime: new Date(),
                missedDay: lastCheck.format('YYYY-MM-DD')
              })
              await db.collection('transactions').add({
                amount: activity.data().mulct,
                type: 'mulct',
                userId: user.id,
                createdAt: new Date(),
                missedActivityId: ref.id,
                activityId: activity.id
              })
              this.log(`"${user.data().name}" mulct for "${activity.data().title}" for "${lastCheck.format('YYYY-MM-DD')}" by "${activity.data().mulct}"ID at "${moment().format('DD-MM-YYYY hh:mm:ss')}" run By "${this.$store.getters.user.email}"`)
            } else {
              this.log('passed or already paid')
            }
            await db.collection('users').doc(user.id).update({lastCheck: new Date()})
            lastCheck = lastCheck.add(1, 'day')
          }
        }
      }
    }
  },
}
</script>
