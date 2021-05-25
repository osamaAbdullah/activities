<template>
  <div class="flex items-center justify-center h-screen">
    <div class="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64"></div>
  </div>
</template>
<script>

export default {
  watch:{
    user(user) {
      this.redirect(user)
    }
  },
  computed: {
    user() {
      return this.$store.state.user
    }
  },
  methods: {
    redirect(user) {
       if (user.authenticated === true) {
         this.$router.replace(this.$store.state.initRoute === '/checking' ? '/' : this.$store.state.initRoute)
       }
       else {
         this.$router.replace({name: 'Login'})
       }
    }
  }
}
</script>
<style scoped>

.loader {
  border-top-color: #3498db;
  -webkit-animation: spinner 1.5s linear infinite;
  animation: spinner 1.5s linear infinite;
}

@-webkit-keyframes spinner {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spinner {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
