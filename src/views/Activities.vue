<template>
  <div class="flex justify-center w-2/6 mx-auto shadow overflow-hidden border-b border-gray-200 sm:rounded-lg my-6">
    <div class="text-2xl px-10 py-10">All activities</div>
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
                myStatus
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Mulct
              </th>
              <th scope="col" class="relative px-6 py-3">
                <span class="sr-only">Join</span>
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
                 <span v-if="activity.status" class="px-2 select-none inline-flex text-xs leading-5 font-semibold rounded-full cursor-pointer bg-green-100 text-green-800">
                  Active
                </span>
                <span v-else class="px-2 select-none inline-flex text-xs leading-5 font-semibold rounded-full cursor-pointer bg-red-100 text-red-800">
                  Disabled
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  {{ activity.myStatus }}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {{ activity.mulct }}
              </td>
              <td class="px-6 font-medium">
                <button v-if="activity.joined" @click="leaveActivity(activity.id, index)"
                        class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">Leave
                </button>
                <button v-else @click="joinActivity(activity.id, index)"
                        class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">Join
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
      db.collection('user_activity').doc(this.$store.getters.user.uid + '_' + activityId).set({
        joinedAt: new Date(),
        userId: this.$store.getters.user.uid,
        lastCheck: new Date(),
        activityId,
      }).then(() => {
        this.activities[index].joined = true;
        this.activities[index].myStatus = 'joined ' + moment(new Date(), 'DD-MM-YYYY hh:mm:ss').fromNow();
      }).catch((error) => {
        console.error("Error adding document: ", error);
      });
    },
    leaveActivity(activityId, index) {
      db.collection("user_activity").doc(this.$store.getters.user.uid + '_' + activityId).delete().then(() => {
        this.activities[index].joined = false;
        this.activities[index].myStatus = 'not joined';
        console.log("Document successfully deleted!");
      }).catch((error) => {
        console.error("Error removing document: ", error);
      });
    },
  },
  created() {
    db.collection("activities").onSnapshot((querySnapshot) => {
      this.activities = []
      querySnapshot.forEach(async (doc) => {
        let myActivity = await db.collection('user_activity').doc(this.$store.getters.user.uid + '_' + doc.id).get();
        if (myActivity.data() === undefined) {
          this.activities.unshift({
            id: doc.id,
            ...doc.data(),
            joined: false,
            myStatus: 'not joined',
          });
        } else {
          this.activities.unshift({
            id: doc.id,
            ...doc.data(),
            joined: true,
            myStatus: 'joined ' + moment(myActivity.data().joinedAt.toDate(), 'DD-MM-YYYY hh:mm:ss').fromNow(),
          });
        }
      });
    });
  },
}
</script>
