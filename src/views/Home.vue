<template>
  <div class="home">
    Welcome to activity manager app
    <balance/>
  </div>
  <h1 v-cloak>
    Your Status {{ status }}
  </h1>
  <table>
    <thead>
    <tr>
      <th>title</th>
      <th>description</th>
      <th>type</th>
      <th>mulct</th>
      <th>status</th>
      <th>Actions</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(activity, index) in activities" :key="activity.id">
      <td>{{ activity.title }}</td>
      <td>{{ activity.description }}</td>
      <td>{{ activity.type }}</td>
      <td>{{ activity.mulct }}</td>
      <td>{{ activity.completed ? 'Completed' : 'Pending' }}</td>
      <td v-if="activity.completed">
        <button @click="markAsPending(activity.id, index)">Mark as Pending</button>
      </td>
      <td v-else>
        <button @click="markAsCompleted(activity.id, index)">Mark as Completed</button>
      </td>
    </tr>
    </tbody>
  </table>


</template>

<script>


import {db} from "../firebase";
import moment from "moment";
import balance from "../components/user/balance.vue";


export default {
  name: 'Home',
  components: {
    balance,
  },
  data: () => ({
    activities: [],
    ca: 'completed_activities',

  }),
  methods: {
    markAsPending(activityId, index) {
      db.collection(this.ca)
          .doc(this.completedActivity())
          .delete()
      this.activities[index].completed = false;
    },
    markAsCompleted(activityId, index) {
      db.collection(this.ca)
          .doc(this.completedActivity())
          .set({activityId: activityId, userId: this.$store.getters.user.uid, dateTime: new Date()})
      this.activities[index].completed = true;
    },
    completedActivity(activityId) {
      return `${activityId}__${this.$store.getters.user.uid}__${moment().format('YYYY_MM_DD')}`;
    },
  },
  computed: {
    status() {
      return this.ratio * 100 + '%';
    },
    ratio() {
      return this.activities.filter((activity) => activity.completed).length / this.activities.length
    }
  },
  mounted() {
    db.collection('user_activity')
        .where('userId', '==', this.$store.getters.user.uid)
        .onSnapshot((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            db.collection('activities').doc(doc.data().activityId)
                .onSnapshot(async (activity) => {
                  let doneActivity = await db.collection(this.ca)
                      .doc(this.completedActivity())
                      .get()
                  this.activities.unshift({
                    id: activity.id,
                    completed: doneActivity.data() !== undefined,
                    ...activity.data(),
                  });

                })
            // console.log(doc.id, " => ", doc.data());
          });
        });
  }
}
</script>
