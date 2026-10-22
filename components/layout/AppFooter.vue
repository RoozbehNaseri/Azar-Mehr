<template>
  <v-footer id="contact-section" padless color="grey lighten-3" class="py-8 mt-12">
    <v-container>
      <!-- هم تراز کردن عمودی -->
      <v-row justify="space-between" align="start">
        
        <!-- ریسپانسیو -->
        <v-col cols="12" md="7" :class="currentLang === 'fa' ? 'text-right' : 'text-left'">
          <!-- تیتر بخش تماس با ما -->
          <h3 class="text-h6 font-weight-black primary--text mb-5">
            {{ t.title }}
          </h3>
          
          <!-- لوکیشن -->
          <div class="d-flex align-center mb-3">
            <v-icon color="primary" :class="currentLang === 'fa' ? 'ml-3' : 'mr-3'">mdi-map-marker</v-icon>
            <span class="text-body-2 font-weight-medium grey--text text--darken-3">
              {{ t.address }}
            </span>
          </div>

          <!-- تلفن -->
          <div class="d-flex align-center mb-3" :dir="currentLang === 'fa' ? 'rtl' : 'ltr'">
            <v-icon color="primary" :class="currentLang === 'fa' ? 'ml-3' : 'mr-3'">mdi-phone</v-icon>
            <!-- استفاده از کلاس فونت عددی برای یکدست ماندن شماره تلفن -->
            <span class="text-body-2 font-weight-medium grey--text text--darken-3 font-numeric">
              {{ t.phone }}
            </span>
          </div>

          <!--   ایمیل پشتیبانی  -->
          <div class="d-flex align-center mb-4" :dir="currentLang === 'fa' ? 'rtl' : 'ltr'">
            <v-icon color="primary" :class="currentLang === 'fa' ? 'ml-3' : 'mr-3'">mdi-email</v-icon>
            <span class="text-body-2 font-weight-medium grey--text text--darken-3">
              {{ t.email }}
            </span>
          </div>
        </v-col>

        <!-- نام شرکت -->
        <v-col cols="12" md="4" :class="currentLang === 'fa' ? 'text-md-left text-center' : 'text-md-right text-center'">
          <div class="text-subtitle-1 font-weight-black primary--text">{{ t.companyName }}</div>
          <!-- سال جاری میلادی -->
          <div class="caption grey--text text--darken-1 mt-2 d-inline-block" dir="ltr">
            © {{ new Date().getFullYear() }} Azar Mehr Pardazesh. All rights reserved.
          </div>
        </v-col>

      </v-row>

      <!-- خط جداکننده افقی وسط فوتر -->
      <v-divider class="my-4" />

      <!-- توضیحات فوتر -->
      <div class="text-center caption grey--text text--darken-1">
        {{ t.demoNote }}
      </div>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: 'AppFooter',
  computed: {
    currentLang() {
      return this.$store.state.auth.locale || 'fa'
    },
    t() {
      const translations = {
        fa: {
          title: 'با ما در تماس باشید',
          address: 'خراسان جنوبی، قائنات، مرکز رشد واحد های فناور',
          phone: '۰۵۶-۳۲۵۲۹۲۷۶',
          email: 'info@azarmehrpardazesh.com',
          companyName: 'آذر مهر پردازش',
          demoNote: 'نمونه دمو ورود و ثبت‌نام با ذخیره‌سازی محلی مرورگر'
        },
        en: {
          title: 'Contact Us',
          address: 'South Khorasan, Qaen, Technology Incubator Center',
          phone: '056-32529276',
          email: 'info@azarmehrpardazesh.com',
          companyName: 'Azar Mehr Pardazesh',
          demoNote: 'Login and registration demo sample with browser local storage'
        }
      }
      return translations[this.currentLang]
    }
  }
}
</script>

<style scoped>
/* دیفالت انگلیسی */
.font-numeric {
  font-family: sans-serif;
}
</style>