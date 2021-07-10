<template>
  <h1 class="text-center text-2xl">Testing Page</h1>
</template>

<script>
import {db} from '../firebase'
import moment from 'moment';

export default {
  name: 'Activities',
  data: () => ({
    activities: [],
  }),

  created() {
    console.log('created')

    // db.collection('missed_activities')
    //     .where('missedDay', '==', '2021-07-09')
    //     .onSnapshot(res => {
    //       res.forEach(re => {
    //         db.doc('missed_activities/'+re.id).delete()
    //
    //
    //         db.collection('transactions')
    //             .where('missedActivityId', '==', re.id)
    //             .onSnapshot(res1 => {
    //               res1.forEach(re1 => {
    //                 db.doc('transactions/'+re.id).delete()
    //                 console.log(re1.data().amount)
    //                 console.log(re1.data().createdAt.toDate())
    //                 console.log(re1.data())
    //               })
    //             })
    //
    //
    //         console.log(re.id)
    //       })
    //     })


     // db.collection('missed_activities')
     //     .where('missedDay', '==', '2021_07_09')
     //     .onSnapshot(res => {
     //       res.forEach(re => {
     //         db.doc('missed_activities/'+re.id).delete()
     //         console.log(re.id)
     //       })
     //     })

    // db.doc('missed_activities/4RuKW9v7WX6HWRetGkj5__3T1ysT488iV4wY3UcxOCn3dQID32__2021_07_08')
    //     .get()
    //     .then(res => {
    //       console.log(res.data())
    //     })

    // let date = new Date('2021-07-06 00:00:00')
    //
    // db.collection('transactions')
    //     .where('type', '==', 'mulct')
    //     .where('createdAt', '>', date)
    //     .onSnapshot(res => {
    //       res.forEach(re => {
    //         db.doc('transactions/'+re.id).delete()
    //         console.log(re.data().amount)
    //         console.log(re.data().createdAt.toDate())
    //         console.log(re.data())
    //       })
    // })

    db.collection('user_activity')
        .where('activityId', '==', '4RuKW9v7WX6HWRetGkj5')
    .onSnapshot(res => {
      res.forEach(re => {
        console.log(re.id)
        db.doc('user_activity/'+re.id).update({
          lastCheck: new Date('2021-07-09 00:01:00'),
        })
      })
    })


  },
}
</script>
