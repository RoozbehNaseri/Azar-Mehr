<template>
  <v-form ref="signupFormRef" v-model="valid" @submit.prevent="handleSignup">
    <h2 class="text-h4 mb-2 primary--text">ثبت‌نام</h2>
    <p class="text-body-2 text-grey-darken-1 mb-6">
      برای استفاده از امکانات حساب کاربری ایجاد کنید
    </p>

    <v-text-field
      v-model="formData.fullName"
      :rules="nameRules"
      label="نام و نام خانوادگی"
      outlined dense
      prepend-inner-icon="mdi-account"
      clearable
      class="mb-2"
    />

    <v-text-field
      v-model="formData.email"
      :rules="emailRules"
      label="ایمیل"
      type="email"
      outlined dense
      prepend-inner-icon="mdi-email"
      clearable
      class="mb-2"
    />

    <v-text-field
      v-model="formData.password"
      :rules="passwordRules"
      label="رمز عبور"
      :type="showPassword ? 'text' : 'password'"
      outlined dense
      prepend-inner-icon="mdi-lock"
      :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
      @click:append="showPassword = !showPassword"
      hint="حداقل ۶ کاراکتر"
      persistent-hint
      clearable
      class="mb-2"
    />

    <v-text-field
      v-model="formData.confirmPassword"
      :rules="confirmPasswordRules"
      label="تکرار رمز عبور"
      :type="showConfirmPassword ? 'text' : 'password'"
      outlined dense
      prepend-inner-icon="mdi-lock-check"
      :append-icon="showConfirmPassword ? 'mdi-eye-off' : 'mdi-eye'"
      @click:append="showConfirmPassword = !showConfirmPassword"
      clearable
      class="mb-4"
    />

    <v-btn
      type="submit"
      color="primary"
      large block
      :loading="loading"
      :disabled="!valid"
      class="mb-4"
    >
      ثبت‌نام
      <v-icon end>mdi-account-plus</v-icon>
    </v-btn>

    <v-alert
      v-if="message.text"
      :type="message.type"
      dismissible
      class="mb-4"
      @input="message.text = ''"
    >
      {{ message.text }}
    </v-alert>

    <div class="text-center">
      <v-btn text color="accent" @click="switchToLogin">
        قبلاً ثبت‌نام کرده‌اید؟ ورود
      </v-btn>
    </div>
  </v-form>
</template>

<script>
export default {
  name: 'SignupForm',

  data() {
    return {
      formData: {
        fullName: '',
        email: '',
        password: '',
        confirmPassword: ''
      },
      valid: false, 
      loading: false, 
      showPassword: false, 
      showConfirmPassword: false, 
      // آبجکت مدیریت پیام‌های آلرت
      message: {
        text: '',
        type: 'success'
      }
    }
  },

  computed: {
    nameRules() {
      return [
        v => !!v || 'وارد کردن نام الزامی است',
        v => (v && v.length <= 50) || 'نام نمی‌تواند بیشتر از ۵۰ کاراکتر باشد'
      ]
    },
    emailRules() {
      return [
        v => !!v || 'وارد کردن ایمیل الزامی است',
        v => (v && v.includes('@')) || 'ایمیل باید دارای علامت @ باشد'
      ]
    },
    passwordRules() {
      return [
        v => !!v || 'وارد کردن رمز عبور الزامی است',
        v => (v && v.length >= 6) || 'رمز عبور حداقل باید ۶ کاراکتر باشد'
      ]
    },
    confirmPasswordRules() {
      return [
        v => !!v || 'تکرار رمز عبور الزامی است',
        v => v === this.formData.password || 'رمز عبور مطابقت ندارد'
      ]
    }
  },

  methods: {
    async handleSignup() {
      if (!this.$refs.signupFormRef.validate()) return 

      this.loading = true
      this.message.text = ''

      try {
        //     شبیه‌سازی تاخیر پاسخ‌دهی سرور
        await new Promise((resolve, reject) => {
          setTimeout(() => {
            try {
              // خواندن لیست کاربران 
              const users = JSON.parse(localStorage.getItem('simulated_users') || '[]')
              //  تکراری نبودن ایمیل 
              const userExists = users.some(u => u.email === this.formData.email)

              if (userExists) {
                reject(new Error('این ایمیل قبلاً ثبت شده است'))
                return
              }

              // اضافه کردن مشخصات کاربر جدید به لیست
              users.push({
                name: this.formData.fullName,
                email: this.formData.email,
                password: this.formData.password
              })

              // ذخیره لیست آپدیت شده در حافظه مرورگر
              localStorage.setItem('simulated_users', JSON.stringify(users))
              resolve()
            } catch (e) {
              reject(new Error('خطایی در ذخیره‌سازی اطلاعات رخ داد'))
            }
          }, 1200) //تاخیر ۱.۲ ثانیه ای برای طبیعی جلوه دادن 
        })

        this.message = { text: 'ثبت‌نام با موفقیت انجام شد', type: 'success' }
        this.$refs.signupFormRef.reset()
        
        // انتقال خودکار به تب ورود 
        setTimeout(() => {
          this.switchToLogin()
        }, 2000)

      } catch (error) {
        // ثبت و نمایش خطای رخ داده در کامپوننت
        this.message = { text: error.message, type: 'error' }
      } finally {
        this.loading = false
      }
    },
    switchToLogin() {
      this.$emit('switch-to-login')
    }
  }
}
</script>