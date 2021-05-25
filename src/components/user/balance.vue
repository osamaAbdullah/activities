<template>
  <div> Your balance is ( {{ balance }} ) </div>
</template>

<script>
import {db} from "../../firebase";

export default {
  name: 'Balance',
  data: () => ({
    balance: 0,
  }),
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
