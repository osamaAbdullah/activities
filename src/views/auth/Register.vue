<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
             alt="Workflow"/>
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create new account
        </h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          <router-link class="font-medium text-indigo-600 hover:text-indigo-500" to="/login">you already have an
            account?
          </router-link>
        </p>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent="signUp">
        <input type="hidden" name="remember" value="true"/>
        <div class="rounded-md shadow-sm -space-y-px">

          <errors :errors="form.errors"/>
          <div>
            <label for="full-name" class="sr-only">Full name</label>
            <input id="full-name" v-model="form.fields.name" type="text" autocomplete="full-name" required=""
                   class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                   placeholder="Full name"/>
          </div>
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input id="email-address" v-model="form.fields.email" type="email" autocomplete="email" required=""
                   class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                   placeholder="Email address"/>
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input id="password" v-model="form.fields.password" type="password" autocomplete="current-password"
                   required=""
                   minlength="6"
                   class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                   placeholder="Password"/>
          </div>
          <div>
            <label for="password-confirmation" class="sr-only">Password confirmation</label>
            <input id="password-confirmation" v-model="form.fields.passwordConfirmation" type="password"
                   autocomplete="current-password"
                   required=""
                   minlength="6"
                   class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                   placeholder="Password confirmation"/>
          </div>
        </div>
        <div>
          <button type="submit"
                  class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
            </span>
            Sign up
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

import {auth, db} from '../../firebase';
import errors from '../../components/errors.vue'

export default {
  name: 'Register',
  components: {
    errors
  },
  data: () => ({
    form: {
      fields: {
        name: '',
        email: '',
        password: '',
        passwordConfirmation: '',
      },
      errors: []
    },
  }),
  methods: {
    signUp() {
      this.form.errors = []
      if (this.form.fields.password !== this.form.fields.passwordConfirmation)
        return this.form.errors.push('passwordConfirmation must be the same as password');

      auth.createUserWithEmailAndPassword(this.form.fields.email, this.form.fields.password)
          .then((userCredential) => {
            db.collection("users")
                .doc(userCredential.user.uid)
                .set({
                  name: this.form.fields.name,
                  role: 'user',
                  email: this.form.fields.email,
                });
          })
          .catch((error) => {
            this.form.errors.push(error.message);
          });
    },
  },
  created() {
    if (this.$store.getters.user.authenticated) {
      this.$router.replace({name: 'Home'})
    }
  }
}
</script>
