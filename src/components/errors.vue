<template>
  <div v-if="errors.length > 0" class="mt-8 my-4 bg-red-200 text-red-600 p-4">
    <ul>
      <li v-for="(error, index) in errors" :key="index" v-text="error"></li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    errors: {
      type: Array,
      default: []
    },
  }
}
</script>
