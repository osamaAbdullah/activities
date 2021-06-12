<template>
  <div class="flex items-center justify-center h-screen">
    <div class="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-64 w-64"></div>
  </div>
</template>
<script>

export default {
  watch: {
    user(user) {
      if (user.authenticated === true) {
        this.$router.replace(
            ['/checking', '/pending', '/blocked', '/402', '/login', '/register'].includes(this.$store.state.initRoute) ?
                '/' :
                this.$store.state.initRoute
        )
      }
    }
  },
  computed: {
    user() {
      return this.$store.state.user
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
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
