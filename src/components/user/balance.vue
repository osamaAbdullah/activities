<template>
  <div class="flex justify-end lg:container pr-3">
    <div class="w-1/6 px-5 py-5 shadow border-b border-gray-200 sm:rounded-lg my-6" :class="color"> {{ balance }} </div>
  </div>
</template>

<script>
import {db} from "../../firebase";

export default {
  name: 'Balance',
  data: () => ({
    balance: 0,
  }),
  computed: {
    color() {
      if (this.balance === 0) return ''
      else if (this.balance > 0) return 'bg-green-300'
      else if (this.balance < 0) return 'bg-red-300'
    }
  },
  mounted() {
    db.collection('transactions')
        .where('userId', '==', this.$store.getters.user.uid)
        .onSnapshot((querySnapshot) => {
          this.balance = 0;
      querySnapshot.forEach((doc) => {
        doc.data().type === 'cashIn' ?
        this.balance += parseInt(doc.data().amount) :
        this.balance -= parseInt(doc.data().amount)
      })});
    // setTimeout(async () => {console.log('hey')}, 3000)
  }
}
</script>

<style scoped>

</style>
