<template>
  <v-card class="auth-card" elevation="2">
    
    <div class="custom-tabs-container pa-4">
      <button 
        type="button" 
        class="custom-tab-btn" 
        :class="{ 'is-active': activeTab === 'login' }"
        @click="activeTab = 'login'"
      >
        <v-icon 
          class="ml-2 mr-2" 
          :color="activeTab === 'login' ? 'white' : 'primary'"
        >
          mdi-login
        </v-icon>
        {{ t.login }}
      </button>
      
      <button 
        type="button" 
        class="custom-tab-btn" 
        :class="{ 'is-active': activeTab === 'signup' }"
        @click="activeTab = 'signup'"
      >
        <v-icon 
          class="ml-2 mr-2" 
          :color="activeTab === 'signup' ? 'white' : 'primary'"
        >
          mdi-account-plus
        </v-icon>
        {{ t.signup }}
      </button>
    </div>

    <v-card-text class="pa-6">
      <LoginFormContent 
        v-show="activeTab === 'login'"
        ref="loginFormContentRef"
        @login-success="handleLoginSuccess"
      />
      
      <SignupForm 
        v-show="activeTab === 'signup'"
        @switch-to-login="activeTab = 'login'"
      />
    </v-card-text>
  </v-card>
</template>

<script>
import LoginFormContent from './LoginFormContent.vue'
import SignupForm from './SignupForm.vue'

export default {
  name: 'LoginForm',
  components: {
    LoginFormContent,
    SignupForm
  },

  data() {
    return {
      activeTab: 'login' // مدیریت تب فعال (ورود یا ثبت‌نام)
    }
  },

  computed: {
    // گرفتن زبان فعلی سیستم از استور
    currentLang() {
      return this.$store.state.auth.locale || 'fa'
    },
    // ترجمه متون بر اساس زبان فعال
    t() {
      const translations = {
        fa: { login: 'ورود', signup: 'ثبت‌نام' },
        en: { login: 'Login', signup: 'Register' }
      }
      return translations[this.currentLang]
    }
  },

  methods: {
    // فرستادن سیگنال به پرنت
    handleLoginSuccess(payload) {
      this.$emit('login-success', payload)
    }
  }
}
</script>

<style scoped>
/* استایل ظاهری کارت */
.auth-card {
  border-radius: 28px !important;
  overflow: hidden;
}
/* استایل باکس دور تب‌ها */
.custom-tabs-container {
  display: flex;
  gap: 12px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #e2e8f0;
}
/* استایل پیش‌فرض دکمه‌های تب */
.custom-tab-btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  border: 1px solid #1e3a8a;
  background-color: #ffffff;
  color: #1e3a8a;
  font-weight: 700;
  font-size: 0.95rem;
  border-radius: 14px;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
}
/* استایل تبی که فعال شده */
.custom-tab-btn.is-active {
  background-color: #1e3a8a;
  color: #ffffff !important;
  border-color: #1e3a8a;
  box-shadow: 0 4px 12px rgba(30, 58, 138, 0.15);
}
/* افکت هاور روی تبی که فعال نیست */
.custom-tab-btn:not(.is-active):hover {
  background-color: rgba(30, 58, 138, 0.05);
}
</style>
