<template>
  <nav class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <button @click="mobileMenu = ! mobileMenu" type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <router-link to="/" :class="navLink('/')">Dashboard</router-link>
              <router-link to="/activities" :class="navLink('/activities')">Activities</router-link>
<!--              <router-link to="/tasks/daily/my-missed-activities" :class="navLink('/tasks/daily/my-missed-activities')">My Daily missed activities</router-link>-->
              <router-link to="/users" :class="navLink('/users')">Users</router-link>
              <router-link to="/activities-manager" :class="navLink('/activities-manager')">Activity Manager</router-link>
              <router-link to="/tasks/daily/missed-activities" :class="navLink('/tasks/daily/missed-activities')">Daily missed activities</router-link>
            </div>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
            <span class="sr-only">View notifications</span>
            <!-- Heroicon name: outline/bell -->
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>

          <!-- Profile dropdown -->
          <div class="relative">
            <button ref="userMenuB" type="button" class="ml-3 bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white text-white px-2 py-2" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <span class="sr-only">Open user menu</span>
              {{ $store.getters.user.name }}
            </button>
            <!--
              Dropdown menu, show/hide based on menu state.

              Entering: "transition ease-out duration-100"
                From: "transform opacity-0 scale-95"
                To: "transform opacity-100 scale-100"
              Leaving: "transition ease-in duration-75"
                From: "transform opacity-100 scale-100"
                To: "transform opacity-0 scale-95"
            -->
            <div ref="menu" v-show="userMenu" class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1">
              <!-- Active: "bg-gray-100", Not Active: "" -->
              <a  class="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-200" role="menuitem" tabindex="-1" @click.prevent="logout">Sign out</a>
              <router-link to="/settings" class="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-200">Settings</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="mobileMenu" class="sm:hidden" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1 flex flex-col">
        <router-link to="/" :class="navLink('/')">Dashboard</router-link>
        <router-link to="/activities" :class="navLink('/activities')">Activities</router-link>
<!--        <router-link to="/tasks/daily/my-missed-activities" :class="navLink('/tasks/daily/my-missed-activities')">My Daily missed activities</router-link>-->
        <router-link to="/users" :class="navLink('/users')">Users</router-link>
        <router-link to="/activities-manager" :class="navLink('/activities-manager')">Activity Manager</router-link>
        <router-link to="/tasks/daily/missed-activities" :class="navLink('/tasks/daily/missed-activities')">Daily missed activities</router-link>
      </div>
    </div>
  </nav>
</template>

<script>

import {auth} from "../firebase";

export default {
  data: () => ({
    userMenu: false,
    mobileMenu: false,
    showBigImage: false,
    active: 'bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium',
    notActive: 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
  }),
  methods: {
    logout() {
      auth.signOut().then(() => this.$router.replace({name: 'Login'})).catch();
    },
    navLink(path) {
      return path === this.$route.path ? this.active : this.notActive
    },
    onClick(event) {
      if (this.userMenu === true && !this.$refs['menu'].contains(event.target))
        this.userMenu = false;
      if (this.userMenu === false && event.target === this.$refs['userMenuB']) {
        this.userMenu = true;
      }
    },
  },
  mounted() {
    window.addEventListener('click', this.onClick)
  },
  unmounted() {
    window.removeEventListener('click', this.onClick)
  },
}
</script>
