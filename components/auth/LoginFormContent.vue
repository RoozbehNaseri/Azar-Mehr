<template>
  <v-form ref="loginFormRef" v-model="valid" @submit.prevent="handleLogin">
    <h2 class="text-h4 mb-2 primary--text">{{ t.welcome }}</h2>
    <p class="text-body-2 text-grey-darken-1 mb-6">
      {{ t.subtitle }}
    </p>

    <v-text-field
      v-model="loginData.email"
      :rules="emailRules"
      :label="t.email"
      type="email"
      placeholder="example@company.com"
      outlined dense
      prepend-inner-icon="mdi-email"
      clearable
    />

    <v-text-field
      v-model="loginData.password"
      :rules="passwordRules"
      :label="t.password"
      :type="showPassword ? 'text' : 'password'"
      outlined dense
      prepend-inner-icon="mdi-lock"
      :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
      @click:append="showPassword = !showPassword"
      clearable
    />

    <div class="d-flex justify-space-between align-center mb-6">
      <v-checkbox
        v-model="rememberMe"
        :label="t.rememberMe"
        hide-details
        dense
      />
      <v-btn text color="primary" small @click="forgotPassword">
        {{ t.forgotPassword }}
      </v-btn>
    </div>

    <v-btn
      type="submit"
      color="primary"
      large block
      :loading="$store.state.auth.loading"
      :disabled="!valid"
      class="mb-4"
    >
      {{ t.loginBtn }}
      <v-icon end>mdi-arrow-left</v-icon>
    </v-btn>

    <v-alert
      v-if="errorMessage"
      type="error"
      dismissible
      class="mb-4"
      @input="errorMessage = ''"
    >
      {{ errorMessage }}
    </v-alert>
  </v-form>
</template>

<script>
export default {
  name: 'LoginFormContent',

  data() {
    return {
      // مقادیر فیلدهای فرم
      loginData: {
        email: '',
        password: ''
      },
      rememberMe: false, 
      showPassword: false, 
      valid: false, 
      errorMessage: '' 
    }
  },

  computed: {
    // خوندن زبان فعلی 
    currentLang() {
      return this.$store.state.auth.locale || 'fa'
    },
    t() {
      const translations = {
        fa: {
          welcome: 'خوش آمدید',
          subtitle: 'برای ادامه ایمیل و رمز عبور خود را وارد کنید',
          email: 'ایمیل',
          password: 'رمز عبور',
          rememberMe: 'مرا به خاطر بسپار',
          forgotPassword: 'رمز را فراموش کرده‌اید؟',
          loginBtn: 'ورود',
          emailRequired: 'وارد کردن ایمیل الزامی است',
          emailInvalid: 'ایمیل باید دارای علامت @ باشد',
          emailTooLong: 'ایمیل نمی‌تواند بیشتر از ۱۰۰ کاراکتر باشد',
          passwordRequired: 'وارد کردن رمز عبور الزامی است',
          passwordTooShort: 'رمز عبور حداقل باید ۶ کاراکتر باشد',
          loginError: 'خطا در ورود',
          supportMessage: 'لطفاً با پشتیبانی  تماس بگیرید: support@rasta.com'
        },
        en: {
          welcome: 'Welcome',
          subtitle: 'Please enter your email and password to continue',
          email: 'Email',
          password: 'Password',
          rememberMe: 'Remember me',
          forgotPassword: 'Forgot password?',
          loginBtn: 'Login',
          emailRequired: 'Email is required',
          emailInvalid: 'Email must contain @ character',
          emailTooLong: 'Email cannot exceed 100 characters',
          passwordRequired: 'Password is required',
          passwordTooShort: 'Password must be at least 6 characters',
          loginError: 'Login failed',
          supportMessage: 'Please contact  support: support@rasta.com'
        }
      }
      return translations[this.currentLang]
    },
    //     شروط ایمیل
    emailRules() {
      return [
        v => !!v || this.t.emailRequired,
        v => (v && v.includes('@')) || this.t.emailInvalid,
        v => (v && v.length <= 100) || this.t.emailTooLong
      ]
    },
    //     شروط رمز عبور
    passwordRules() {
      return [
        v => !!v || this.t.passwordRequired,
        v => (v && v.length >= 6) || this.t.passwordTooShort
      ]
    }
  },

  mounted() {
    //    از قبل ایمیلی ذخیره شده یا نه
    const rememberedEmail = localStorage.getItem('remembered_email')
    if (rememberedEmail) {
      this.loginData.email = rememberedEmail
      this.rememberMe = true
    }
  },

  methods: {
    //   پروسه ورود کاربر
    async handleLogin() {
      if (!this.$refs.loginFormRef.validate()) return // اگه معتبر نبود ادامه نده

      this.errorMessage = ''
      
      // سیو یا پاک کردن ایمیل
      if (this.rememberMe) {
        localStorage.setItem('remembered_email', this.loginData.email)
      } else {
        localStorage.removeItem('remembered_email')
      }

      try {
        // فرستادن اطلاعات به استور
        const result = await this.$store.dispatch('auth/login', {
          email: this.loginData.email,
          password: this.loginData.password,
          rememberMe: this.rememberMe
        })
        
        // اگر ورود موفق بود رویداد موفقیت رو به کامپوننت پرنت بفرست
        if (result && result.success) {
          this.$emit('login-success', result)
        } else {
          this.errorMessage = (result && result.error) || this.t.loginError
        }
      } catch (error) {
        // مدیریت خطاهای غیرمنتظره سرور
        if (error.response && error.response.data && error.response.data.error) {
          this.errorMessage = error.response.data.error
        } else {
          this.errorMessage = this.t.loginError
        }
      }
    },

    forgotPassword() {
      this.$emit('show-notification', {
        text: this.t.supportMessage,
        type: 'info'
      })
    }
  }
}
</script>