<template>
  <v-app-bar app color="white" elevation="1">
    <v-container class="d-flex align-center justify-space-between fill-height">
      
      <div class="d-none d-md-flex align-center custom-nav" style="gap: 4px;">
        <v-btn text class="nav-btn" @click="handleNav('hero')">{{ t.home }}</v-btn>
        <v-btn text class="nav-btn" @click="$router.push('/services')">{{ t.services }}</v-btn>
        <v-btn text class="nav-btn" @click="handleNav('auth-section')">{{ t.customers }}</v-btn>
        <v-btn text class="nav-btn" @click="handleNav('auth-section')">{{ t.mission }}</v-btn>
        <v-btn text class="nav-btn" @click="handleNav('auth-section')">{{ t.about }}</v-btn>
        <v-btn text class="nav-btn" @click="handleNav('auth-section')">{{ t.cooperation }}</v-btn>
        <v-btn text class="nav-btn" @click="handleNav('contact-section')">{{ t.contact }}</v-btn>
      </div>

      <v-spacer class="d-none d-md-block" />

      <div class="d-flex align-center">
        <div class="text-right ml-3 mr-3">
          <div class="caption grey--text text--darken-1">{{ t.companyType }}</div>
          <strong class="primary--text text-subtitle-1 font-weight-black">{{ t.companyName }}</strong>
        </div>
        <v-avatar size="40" color="blue lighten-5" class="border">
          <div class="logo-core"></div>
        </v-avatar>
      </div>

      <v-spacer />

      <div class="d-flex align-center" style="gap: 12px;">
        
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <span>{{ currentLocaleFlag }}</span>
            </v-btn>
          </template>
          <v-list dense>
            <v-list-item @click="switchLanguage('fa')">
              <v-list-item-title>🇮🇷 فارسی</v-list-item-title>
            </v-list-item>
            <v-list-item @click="switchLanguage('en')">
              <v-list-item-title>🇬🇧 English</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-btn
          v-if="!isLoggedIn"
          color="primary"
          outlined rounded
          class="font-weight-bold"
          @click="$emit('show-login')"
        >
          {{ t.loginBtn }}
        </v-btn>

        <v-menu v-else offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-avatar size="40" color="primary" class="cursor-pointer" v-bind="attrs" v-on="on">
              <span class="white--text font-weight-bold">{{ userInitial }}</span>
            </v-avatar>
          </template>
          <v-list dense width="140">
            <v-list-item @click="goToDashboard">
              <v-list-item-title class="font-weight-bold">{{ t.dashboard }}</v-list-item-title>
            </v-list-item>
            <v-divider />
            <v-list-item @click="logout">
              <v-list-item-title class="error--text font-weight-bold">{{ t.logout }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

      </div>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
  name: 'AppHeader',

  computed: {
    // وضعیت لاگین
    isLoggedIn() {
      return this.$store.state.auth.isLoggedIn
    },
    // زبان فعال
    currentLang() {
      return this.$store.state.auth.locale || 'fa'
    },
    // پرچم زبان
    currentLocaleFlag() {
      return this.currentLang === 'fa' ? '🇮🇷' : '🇬🇧'
    },
    // نام کاربر
    userName() {
      return this.$store.getters['auth/userName'] || 'کاربر'
    },
    // حرف اول نام
    userInitial() {
      return this.userName.charAt(0).toUpperCase()
    },
    // واژه‌نامه
    t() {
      const translations = {
        fa: {
          home: 'خانه', services: 'خدمات ما', customers: 'مشتریان ما', mission: 'ماموریت ما',
          about: 'درباره ما', cooperation: 'نحوه همکاری', contact: 'تماس با ما',
          companyType: 'شرکت دانش بنیان', companyName: 'آذر مهر پردازش',
          loginBtn: 'ورود', dashboard: 'داشبورد', logout: 'خروج'
        },
        en: {
          home: 'Home', services: 'Services', customers: 'Customers', mission: 'Our Mission',
          about: 'About Us', cooperation: 'Cooperation', contact: 'Contact Us',
          companyType: 'Knowledge-Based Co.', companyName: 'Azar Mehr Pardazesh',
          loginBtn: 'Login', dashboard: 'Dashboard', logout: 'Logout'
        }
      }
      return translations[this.currentLang]
    }
  },

  mounted() {
    // مقداردهی اولیه
    this.syncLayout(this.currentLang)
  },

  methods: {
    // تغییر زبان
    switchLanguage(lang) {
      this.$store.commit('auth/SET_LOCALE', lang)
      this.syncLayout(lang)
    },
    // همگام‌سازی جهت قالب
    syncLayout(lang) {
      const isFa = lang === 'fa'
      this.$vuetify.rtl = isFa
      document.documentElement.setAttribute('dir', isFa ? 'rtl' : 'ltr')
    },
    // مدیریت ناوبری
    handleNav(action) {
      if (this.$route.path !== '/') {
        this.$router.push('/')
        setTimeout(() => this.scrollToSection(action), 300)
      } else {
        this.scrollToSection(action)
      }
    },
    // اسکرول نرم
    scrollToSection(id) {
      if (id === 'hero') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        return
      }
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    },
    // روت به داشبورد
    goToDashboard() {
      this.$router.push('/dashboard')
    },
    // خروج از حساب
    async logout() {
      await this.$store.dispatch('auth/logout')
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.cursor-pointer { cursor: pointer; }
/* لوگو */
.logo-core {
  width: 20px; height: 20px; border-radius: 50%;
  background: conic-gradient(from 180deg, #1e3a8a, #f97316);
}
.border { border: 1px solid #dbeafe !important; }
/* دکمه‌های ناوبری */
.nav-btn {
  font-weight: 700 !important; font-size: 0.85rem !important;
  color: #64748b !important; letter-spacing: normal !important;
  transition: all 0.2s ease-in-out;
}
/* هوور دکمه‌ها */
.nav-btn:hover { color: #1e3a8a !important; }
</style>