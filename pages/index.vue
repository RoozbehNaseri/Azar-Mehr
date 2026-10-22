<template>
  <div>
    <AppHeader @show-login="scrollToAuth" />
    
    <v-main>
      <v-container>
        <template v-if="pageLoading">
          <v-skeleton-loader type="card" class="mx-auto" elevation="2" />
        </template>
        
        <template v-else>
          <HeroSection />
          
          <v-row justify="center" class="mt-8">
            <v-col cols="12" sm="8" md="5" id="auth-section">
              <LoginForm v-if="!isLoggedIn" @login-success="onLoginSuccess" />
              
              <v-card v-else outlined rounded="lg" class="pa-6 text-center">
                <v-icon size="64" color="success">mdi-check-circle</v-icon>
                <h3 class="text-h5 mt-4">خوش آمدید</h3>
                <p class="text-body-2 mt-2">ورود با موفقیت انجام شد!</p>
                <v-btn color="primary" class="mt-4" @click="goToDashboard">
                  ورود به داشبورد
                  <v-icon right>mdi-arrow-left</v-icon>
                </v-btn>
              </v-card>
            </v-col>
          </v-row>
        </template>
      </v-container>
    </v-main>
    
    <AppFooter />
    
    <v-snackbar v-model="snackbar.show" :color="snackbar.color" :timeout="3000" top>
      {{ snackbar.text }}
      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="snackbar.show = false">بستن</v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  
  // Lazy Loading
  components: {
    AppHeader: () => import('@/components/layout/AppHeader.vue'),
    AppFooter: () => import('@/components/layout/AppFooter.vue'),
    HeroSection: () => import('@/components/layout/HeroSection.vue'),
    LoginForm: () => import('@/components/auth/LoginForm.vue')
  },

  data() {
    return {
      pageLoading: true, 
      snackbar: { show: false, text: '', color: 'success' }  
    }
  },

  computed: {
    isLoggedIn() { 
      return this.$store.state.auth.isLoggedIn 
    }
  },

  async mounted() {
    // بازیابی سشن از لوکال استوریج 
    await this.$store.dispatch('auth/restoreSession')
    setTimeout(() => { this.pageLoading = false }, 300)
  },

  methods: {
    onLoginSuccess() {
      this.snackbar = { show: true, text: 'ورود با موفقیت انجام شد', color: 'success' }
    },
    // اسکرول  به لاگین 
    scrollToAuth() {
      const authSection = document.getElementById('auth-section')
      if (authSection) authSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    },
    goToDashboard() { 
      this.$router.push('/dashboard') 
    }
  }
}
</script>

<style scoped>
</style>