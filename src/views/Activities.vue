<template>

  <div>
    <h1>All activities</h1>
    <table>
      <thead>
      <tr>
        <th>title</th>
        <th>description</th>
        <th>type</th>
        <th>mulct</th>
        <th>status</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(activity, index) in activities" :key="activity.id">
        <td>{{ activity.title }}</td>
        <td>{{ activity.description }}</td>
        <td>{{ activity.type }}</td>
        <td>{{ activity.mulct }}</td>
        <td>{{ activity.status }}</td>
        <td v-if="activity.joined">
          <button @click="leaveActivity(activity.id, index)">leave</button>
        </td>
        <td v-else>
          <button @click="joinActivity(activity.id, index)">join</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {db} from '../firebase'
import moment from 'moment';

export default {
  name: 'Activities',
  data: () => ({
    activities: [],
  }),
  methods: {
    joinActivity(activityId, index) {
      db.collection("user_activity").doc(this.$store.getters.user.uid + '_' + activityId).set({
        joinedAt: new Date(),
        userId: this.$store.getters.user.uid,
        activityId,
      }).then(() => {
        this.activities[index].joined = true;
        this.activities[index].status = 'joined ' + moment(new Date(), 'DD-MM-YYYY hh:mm:ss').fromNow();
      }).catch((error) => {
        console.error("Error adding document: ", error);
      });
    },
    leaveActivity(activityId, index) {
      db.collection("user_activity").doc(this.$store.getters.user.uid + '_' + activityId).delete().then(() => {
        this.activities[index].joined = false;
        this.activities[index].status = 'not joined';
        console.log("Document successfully deleted!");
      }).catch((error) => {
        console.error("Error removing document: ", error);
      });
    },
  },
  created() {
    db.collection("activities").onSnapshot((querySnapshot) => {
      querySnapshot.forEach(async (doc) => {
        let myActivity = await db.collection('user_activity').doc(this.$store.getters.user.uid + '_' + doc.id).get();
        if (myActivity.data() === undefined) {
          this.activities.unshift({
            id: doc.id,
            ...doc.data(),
            joined: false,
            status: 'not joined',
          });
        } else {
          this.activities.unshift({
            id: doc.id,
            ...doc.data(),
            joined: true,
            status: 'joined ' + moment(myActivity.data().joinedAt.toDate(), 'DD-MM-YYYY hh:mm:ss').fromNow(),
          });
        }
      });
    });
  },
}
</script>
