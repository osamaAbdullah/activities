<template>
  <div class="flex justify-center w-2/6 mx-auto shadow overflow-hidden border-b border-gray-200 sm:rounded-lg my-6">
    <div class="text-2xl px-10 py-10">Checking for missed Activities</div>
  </div>
  <div ref="logs"
       class="flex flex-col px-5 py-5 w-1/2 lg:w-2/3 sm:w-5/6 mx-auto shadow overflow-hidden border-b border-gray-200 sm:rounded-lg my-6">
  </div>
</template>

<script>
import {checkUserActivities, currentUser} from "../../helper";

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
    async checkMyActivities() {
      await checkUserActivities(await currentUser(), this.log)
    }
  },
  mounted() {
    this.checkMyActivities()
  },
}
</script>
