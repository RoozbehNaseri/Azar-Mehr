<template>
  <v-app>
    <client-only>
      <v-btn
        v-if="$store.state.auth.isLoggedIn"
        fab
        dark
        color="red"
        style="position: fixed; top: 10px; left: 25px; z-index: 9999;"
        @click="handleLogout"
      >
        <v-icon size="28">mdi-power</v-icon>
      </v-btn>
    </client-only>
    
    <nuxt />
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  methods: {
    async handleLogout() {
      await this.$store.dispatch('auth/logout') 
      this.$router.push('/') 
    }
  }
}
</script>