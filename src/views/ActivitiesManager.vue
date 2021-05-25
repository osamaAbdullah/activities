<template>
  <div class="about">
    <h1>Activities</h1>
  </div>
  <table>
    <thead>
      <tr>
        <th>title</th>
        <th>description</th>
        <th>type</th>
        <th>mulct</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(activity, index) in activities" :key="activity.id">
        <td>{{ activity.title }}</td>
        <td>{{ activity.description }}</td>
        <td>{{ activity.type }}</td>
        <td>{{ activity.mulct }}</td>
        <td><button @click="editActivity(activity.id, index)">Edit</button></td>
      </tr>
    </tbody>
  </table>

  <div>
    {{ form.title }}
    <form @submit.prevent="form.activityId ? updateActivity(form.activityId) : createActivity()">
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
      <input type="submit" value="Save">
    </form>
  </div>


</template>

<script>
import {db} from '../firebase'

export default {
  name: 'ActivityManager',
  data: () => ({
    form: {},
    activities: [],
  }),
  methods: {
    createActivity() {
      db.collection("activities").add(this.form.fields)
          .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
          })
          .catch((error) => {
            console.error("Error adding document: ", error);
          });
    },
    editActivity(activityId, index) {
      let activity = this.activities[index];
      this.form.title = `Update activity "${activity.title}"`;
      this.form.activityId = activity.id;
      this.form.fields.title = activity.title;
      this.form.fields.description = activity.description;
      this.form.fields.type = activity.type;
      this.form.fields.mulct = activity.mulct;
    },
    updateActivity(activityId){
      db.collection('activities')
          .doc(activityId)
          .update(this.form.fields)
          .then(() => this.resetForm())
          .catch()
    },
    resetForm() {
      this.form = {
        fields: {
          title: '',
          description: '',
          type: '',
          mulct: '',
        },
        errors: {},
        activityId: false,
        title: 'Create new activity',
      }
    },
  },
  created() {
    this.resetForm();
    db.collection('activities').onSnapshot((querySnapshot) => {
      this.activities = [];
      querySnapshot.forEach((doc) => {
        this.activities.unshift({ id: doc.id, ...doc.data()});
      });
    });
  },
}
</script>
