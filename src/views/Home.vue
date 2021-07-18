<template>
  <balance/>
  <div class="flex w-1/2 lg:w-2/3 sm:w-5/6 mx-auto shadow overflow-hidden border-b border-gray-200 sm:rounded-lg my-6">
    <progress_bar title="Your progress" :percentage="status">
      {{ status }}%
    </progress_bar>
  </div>
  <!-- This example requires Tailwind CSS v2.0+ -->

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
              <th scope="col" class="relative px-6 py-3">
                <span class="sr-only">Edit</span>
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
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  {{ activity.completed ? 'Completed' : 'Pending' }}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {{ activity.mulct }}
              </td>
              <td class="px-6 font-medium">
                <label class="inline-flex items-center justify-center text-2xl">
                  <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600"
                         @change="activity.completed ? markAsCompleted(activity.id, index) : markAsPending(activity.id, index)"
                         v-model="activity.completed">
                  <span class="ml-2 text-gray-700">Completed</span>
                </label>
              </td>
            </tr>

            <!-- More people... -->
            </tbody>
          </table>
          <div id="cards" class="flex flex-col items-center">
            <div v-for="(activity, index) in activities" :key="activity.id"
                 @click="activity.completed ? markAsPending(activity.id, index) : markAsCompleted(activity.id, index)"
                 :class="`rounded-3xl flex flex-col justify-center items-center p-5 my-3 ${activity.completed ? 'bg-green-200' : 'bg-red-200'}`">
              <div v-text="activity.title" class="text-2xl text-white text-center p-1"></div>
              <div v-text="activity.mulct" class="text-white text-center p-1"></div>
              <div v-if="activity.completed" class="py-2 px-3">
                <div class="p-2 w-full bg-green-300 text-sm text-center text-green-500 rounded-full">Completed</div>
                <div class="italic p-2 text-blue-500">click to unComplete</div>
              </div>
              <div v-else class="py-2 px-3">
                <div class="p-2 w-full bg-red-300 text-sm text-center text-red-500 rounded-full">Pending</div>
                <div class="italic p-2 text-blue-500">click to Complete</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


import {db} from "../firebase";
import moment from "moment";
import balance from "../components/user/balance.vue";
import progress_bar from "../components/progress_bar.vue";

export default {
  name: 'Home',
  components: {
    balance,
    progress_bar
  },
  data: () => ({
    activities: [],
    ca: 'completed_activities',
    osama: true

  }),
  methods: {
    markAsPending(activityId, index) {
      if (confirm('Are you sure you didn\'t complete the activity yet?')) {
        db.collection(this.ca)
            .doc(this.completedActivity(activityId))
            .delete()
            .then(_ => this.activities[index].completed = false)
      }
    },
    markAsCompleted(activityId, index) {
      db.collection(this.ca)
          .doc(this.completedActivity(activityId))
          .set({activityId: activityId, userId: this.$store.getters.user.uid, dateTime: new Date()})
          .then(_ => this.activities[index].completed = true)
    },
    completedActivity(activityId) {
      return `${activityId}__${this.$store.getters.user.uid}__${moment().format('YYYY_MM_DD')}`;
    },
  },
  computed: {
    status() {
      return Math.round(this.ratio * 100) || 0;
    },
    ratio() {
      return this.activities.filter((activity) => activity.completed).length / this.activities.length
    }
  },
  mounted() {
    db.collection('user_activity')
        .where('userId', '==', this.$store.getters.user.uid)
        .onSnapshot((querySnapshot) => {
          this.activities = []
          querySnapshot.forEach((doc) => {
            db.collection('activities').doc(doc.data().activityId)
                .onSnapshot(async (activity) => {
                  if (!activity.data().status) return false
                  let doneActivity = await db.collection(this.ca)
                      .doc(this.completedActivity(activity.id))
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
<style scoped>

@media screen and (max-width: 1024px) {
  table {
    display: none !important;
  }
}

@media screen and (min-width: 1024px) {
  #cards {
    display: none !important;
  }
}
</style>
