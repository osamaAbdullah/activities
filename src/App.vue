<template>
  <navigation v-if="user && user.authenticated"/>
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
    this.$store.state.initRoute = '/';
    this.$router.push({name: 'Splash'});
  },
}
</script>
