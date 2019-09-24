<template>
  <v-app>
    <auth-layout></auth-layout>
  </v-app>
</template>

<script>

import AuthLayout from './layout/AuthLayout.vue'

export default {
  name: 'App',
  components: { AuthLayout }
}
</script>
