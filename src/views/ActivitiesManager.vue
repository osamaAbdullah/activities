<template>
  <div class="flex justify-center w-2/6 mx-auto shadow overflow-hidden border-b border-gray-200 sm:rounded-lg my-6">
    <div class="text-2xl px-10 py-10">Activities</div>
  </div>
  <div class="flex justify-end lg:container">
    <button @click="resetForm" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-3">
      New Activity
    </button>
  </div>
  <div class="flex flex-col container mx-auto">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Mulct
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Created At
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Updated At
              </th>
              <th scope="col" class="relative px-6 py-3">
                <span class="sr-only">Edit</span>
              </th>
              <th scope="col" class="relative px-6 py-3">
                <span class="sr-only">Delete</span>
              </th>
            </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="(activity, index) in activities" :key="activity.id">
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">
                      {{ activity.title }}
                    </div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">{{ activity.description }}</div>
                <div class="text-sm text-gray-500">{{ activity.type }}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span v-if="activity.status" class="px-2 select-none inline-flex text-xs leading-5 font-semibold rounded-full cursor-pointer bg-green-100 text-green-800"
                      @dblclick="toggleStatus(activity.id, false)">
                  Active
                </span>
                <span v-else class="px-2 select-none inline-flex text-xs leading-5 font-semibold rounded-full cursor-pointer bg-red-100 text-red-800"
                      @dblclick="toggleStatus(activity.id, true)">
                  Disabled
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {{ activity.mulct }}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <div class="text-sm text-gray-900">{{ formatDateTime(activity.createdAt) }}</div>
                <div class="text-sm text-gray-500">{{ fromNow(activity.createdAt) }}</div>
              </td>
              <td v-if="activity.updatedAt" class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">{{ formatDateTime(activity.updatedAt) }}</div>
                <div class="text-sm text-gray-500">{{ fromNow(activity.updatedAt) }}</div>
              </td>
              <td v-else class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">______</div>
                <div class="text-sm text-gray-500">______</div>
              </td>
              <td class="px-6 font-medium">
                <button @click="editActivity(activity.id, index)"
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Edit
                </button>
              </td>
              <td class="px-6 font-medium">
                <button @click="deleteActivity(activity.id, index)"
                        class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">Delete
                </button>
              </td>
            </tr>
            <!-- More people... -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <div v-if="form.visibility" class="fixed z-20 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog"
       aria-modal="true">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div @click="form.visibility = false" class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
           aria-hidden="true"></div>
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
      <div
          class="inline-block align-bottom bg-white rounded-lg text-left bg-green-500 shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
          <div class="sm:flex sm:items-start">
            <div class="mt-3 w-full text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                {{ form.title }}
              </h3>
              <div class="mt-2">
                <form @submit.prevent="form.activityId ? updateActivity(form.activityId) : createActivity()">
                  <div class="shadow overflow-hidden sm:rounded-md">
                    <div class="px-4 py-5 bg-white sm:p-6">
                      <div class="grid grid-cols-6 gap-6">

                        <div class="col-span-6 sm:col-span-4">
                          <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
                          <input type="text" v-model="form.fields.title" id="title" autocomplete="title" required
                                 class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                        </div>
                        <div class="col-span-6 sm:col-span-4">
                          <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
                          <textarea v-model="form.fields.description" id="description" rows="3" required
                                    class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                                    placeholder="Activity details..."></textarea>
                        </div>

                        <div class="col-span-6 sm:col-span-3">
                          <label for="type" class="block text-sm font-medium text-gray-700">Type</label>
                          <select id="type" v-model="form.fields.type" required autocomplete="country"
                                  class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                            <option value="daily">Daily</option>
                          </select>
                        </div>
                        <div class="col-span-6 sm:col-span-4">
                          <label for="mulct" class="block text-sm font-medium text-gray-700">Mulct</label>
                          <input v-model="form.fields.mulct" type="number" id="mulct" autocomplete="title" required
                                 class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                        </div>
                      </div>
                    </div>
                    <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                      <button type="submit"
                              class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Save
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {db} from '../firebase'
import moment from "moment";

export default {
  name: 'ActivityManager',
  data: () => ({
    form: {},
    activities: [],
  }),
  methods: {
    deleteActivities(collection, id) {
      db.collection(collection).where('activityId', '==', id).get().then(doc => {
        doc.forEach((activity) => {
          db.doc(`${collection}/${activity.id}`).delete().then().catch()
        })
      })
    },
    createActivity() {
      db.collection("activities").add({...this.form.fields, createdAt: new Date(), status: true})
          .then( _ => {
            this.form.visibility = false
          })
          .catch((error) => console.error("Error adding document: ", error));
    },
    editActivity(activityId, index) {
      this.resetForm()
      let activity = this.activities[index];
      this.form.title = `Update activity "${activity.title}"`;
      this.form.activityId = activity.id;
      this.form.fields.title = activity.title;
      this.form.fields.description = activity.description;
      this.form.fields.type = activity.type;
      this.form.fields.mulct = activity.mulct;
    },
    deleteActivity(activityId, index) {
      if (confirm('Are you sure you want to permanently delete this Activity, it will be also deleted from all pages')) {
        db.collection('activities').doc(activityId).delete().then().catch()
        this.deleteActivities('user_activity', activityId)
        this.deleteActivities('missed_activities', activityId)
        this.deleteActivities('completed_activities', activityId)
        this.activities.slice(index, 1)
      }
    },
    updateActivity(activityId) {
      db.collection('activities')
          .doc(activityId)
          .update({...this.form.fields, updatedAt: new Date})
          .then(() => this.form.visibility = false)
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
        visibility: true,
        title: 'Create new activity',
      }
    },
    async toggleStatus(activityId, status){
      if (status) return this.toggleActivity(activityId, status)
      let userActivities = (await db.collection('user_activity').where('activityId', '==', activityId).get()).docs
      for (let activity of userActivities) {
        let lastCheck = moment(activity.data().lastCheck.toDate()).startOf('day')
        let now = moment().startOf('day')
        if (lastCheck.diff(now, 'day') !== 0) return alert('Please run missed Activities, and try again')
      }
      return this.toggleActivity(activityId, status)
    },
    toggleActivity(activityId, status) {
      db.collection('activities')
          .doc(activityId)
          .update({status})
    }
  },
  created() {
    db.collection('activities').onSnapshot((querySnapshot) => {
      this.activities = [];
      querySnapshot.forEach((doc) => {
        this.activities.unshift({id: doc.id, ...doc.data()});
      });
    });
  },
}
</script>
