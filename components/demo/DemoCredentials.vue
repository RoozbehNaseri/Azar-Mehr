<template>
  <!-- کارت اصلی نگهدارنده باکس اطلاعات دمو -->
  <v-card outlined rounded="lg" class="w-100">
    <!-- هدر کارت شامل عنوان و دکمه نوسازی داده‌ها -->
    <v-card-title class="subtitle-1 d-flex justify-space-between align-center">
      <span>🔐 اطلاعات ورود دمو</span>
      <!-- دکمه تولید اطلاعات جدید -->
      <v-btn
        small
        color="primary"
        text
        @click="refreshDemo"
      >
        <v-icon left>mdi-refresh</v-icon>
        تولید جدید
      </v-btn>
    </v-card-title>

    <!-- بدنه کارت شامل نمایش فیلدها و دکمه‌های کپی -->
    <v-card-text>
      <!-- بخش مربوط به ایمیل دمو -->
      <div class="d-flex justify-space-between align-center mb-3">
        <span class="caption font-weight-bold">ایمیل:</span>
        <code class="primary--text">{{ demoEmail }}</code>
        <!-- دکمه کپی کردن ایمیل -->
        <v-btn
          x-small
          text
          color="grey"
          @click="copyToClipboard(demoEmail)"
        >
          <v-icon size="small">mdi-content-copy</v-icon>
          کپی
        </v-btn>
      </div>

      <!-- بخش مربوط به رمز عبور دمو -->
      <div class="d-flex justify-space-between align-center">
        <span class="caption font-weight-bold">رمز عبور:</span>
        <code class="primary--text">{{ demoPassword }}</code>
        <!-- دکمه کپی کردن رمز عبور -->
        <v-btn
          x-small
          text
          color="grey"
          @click="copyToClipboard(demoPassword)"
        >
          <v-icon size="small">mdi-content-copy</v-icon>
          کپی
        </v-btn>
      </div>

      <!-- خط جداکننده میان بدنه و متن راهنما -->
      <v-divider class="my-3" />

      <!-- متن راهنمای استفاده برای کاربر -->
      <div class="caption grey--text">
        💡 می‌توانید از این اطلاعات برای تست سریع سیستم استفاده کنید.
      </div>
    </v-card-text>

    <!-- پاپ‌آپ کوچک پایین صفحه برای نمایش وضعیت کپی شدن متن -->
    <v-snackbar v-model="snackbar.show" :timeout="2000" :color="snackbar.color">
      {{ snackbar.text }}
    </v-snackbar>
  </v-card>
</template>

<script>
export default {
  name: 'DemoCredentials',

  data() {
    return {
      demoEmail: 'demo@rasta.com', // ایمیل پیش‌فرض دمو
      demoPassword: 'password123', // رمز عبور پیش‌فرض دمو
      // آبجکت مدیریت وضعیت اسنک‌بار (پیام موقت)
      snackbar: {
        show: false,
        text: '',
        color: 'success'
      }
    }
  },

  methods: {
    // متد تولید ایمیل و پسورد تصادفی جدید برای تست راحت‌تر
    refreshDemo() {
      const randomId = Math.floor(Math.random() * 1000) // تولید یک عدد تصادفی بین ۰ تا ۱۰۰۰
      this.demoEmail = `user${randomId}@rasta.com`      // ساخت ایمیل جدید با عدد تصادفی
      this.demoPassword = `pass${randomId}!`            // ساخت پسورد جدید با عدد تصادفی
    },

    // متد کپی کردن متون در حافظه موقت (کلیپ‌بورد) سیستم
    async copyToClipboard(text) {
      try {
        await navigator.clipboard.writeText(text) // استفاده از آپشن بومی مرورگر برای کپی متن
        // فعال کردن پیام موفقیت کپی
        this.snackbar = { show: true, text: 'در کلیپ‌بورد کپی شد', color: 'success' }
      } catch (err) {
        // فعال کردن پیام خطا در صورت بروز مشکل
        this.snackbar = { show: true, text: 'خطا در کپی کردن', color: 'error' }
      }
    }
  }
}
</script>