<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          <router-link class="font-medium text-indigo-600 hover:text-indigo-500" to="/register">don't have account yet?</router-link>
        </p>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="signIn">
        <input type="hidden" name="remember" value="true" />
        <div>
          <errors :errors="form.errors" />
          <div class="mt-6">
            <label for="email-address" class="text-sm font-bold text-gray-700 tracking-wide">Email address</label>
            <input id="email-address" v-model="form.fields.email" type="email"  required="" class="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
          </div>
          <div class="mt-6">
            <label for="password" class="text-sm font-bold text-gray-700 tracking-wide">Password</label>
            <input id="password" v-model="form.fields.password" type="password" minlength="6" autocomplete="current-password" required="" class="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
          </div>
        </div>

<!--        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input id="remember_me" name="remember_me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
            <label for="remember_me" class="ml-2 block text-sm text-gray-900">
              Remember me
            </label>
          </div>

          <div class="text-sm">
            <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
              Forgot your password?
            </a>
          </div>
        </div>-->

        <div>
          <button type="submit" class="group mt-10 relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
            </span>
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

import {auth} from '../../firebase';
import errors from '../../components/errors.vue'

export default {
  name: 'Login',
  components: {
    errors
  },
  data: () => ({
    form: {
      fields: {
        email: '',
        password: '',
      },
      errors: [],
    },
  }),
  methods: {
    signIn() {
      auth.signInWithEmailAndPassword(this.form.fields.email, this.form.fields.password).catch(error => {
        this.form.errors.push(error.message);
      });
    }
  },
  created() {
    if (this.$store.getters.user.authenticated) {
      this.$router.replace({name: 'Home'})
    }
  }
}
</script>
