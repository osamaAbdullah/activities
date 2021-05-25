<template>
  <div class="about">
    <h1>Done Activities</h1>
  </div>
  <table>
    <thead>
      <tr>
        <th>User Id</th>
        <th>Date</th>
        <th>Activity Id</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="activity in activities" :key="activity.id">
        <td>{{ activity.title }}</td>
        <td>{{ activity.description }}</td>
        <td>{{ activity.type }}</td>
        <td>{{ activity.mulct }}</td>
      </tr>
    </tbody>
  </table>

  <div>
    create an Activity
    <form @submit.prevent="createActivity">
      <div>
        <label>title</label>
        <input type="text" v-model="form.fields.title">
      </div>
      <div>
        <label>Description</label>
        <input type="text" v-model="form.fields.description">
      </div>
      <div>
        <label>Type</label>
        <input type="text" v-model="form.fields.type">
      </div>
      <div>
        <label>Mulct</label>
        <input type="text" v-model="form.fields.mulct">
      </div>
      <input type="submit" value="create Activity">
    </form>
  </div>


</template>

<script>
import {db} from '../firebase'

export default {
  name: 'DoneActivities',
  data: () => ({
    form: {
      fields: {
        title: '',
        description: '',
        type: '',
        mulct: '',
      },
      errors: {}
    },
    activities: [],
  }),
  methods: {
    createActivity() {
      db.collection('activities').add(this.form.fields)
          .then((docRef) => {
            console.log('Document written with ID: ', docRef.id);
          })
          .catch((error) => {
            console.error('Error adding document: ', error);
          });
    },
  },
  created() {
    db.collection('activities').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.activities.unshift({ id: doc.id, ...doc.data()});
        console.log(this.activities);
      });
    });
  },
  mounted() {

  }
}
</script>
