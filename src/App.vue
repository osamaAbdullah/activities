<template>
  <navigation v-if="user && user.authenticated && user.status === 'active'"/>
  <router-view/>
</template>
<script>

import navigation from "./components/nav.vue";

export default {
  components: {navigation},
  computed: {
    user() {
      return this.$store.getters.user
    }
  },
  created() {
    this.$store.state.initRoute = window.history.state.current;
    this.$router.push({name: 'Splash'});
  },
}
</script>
