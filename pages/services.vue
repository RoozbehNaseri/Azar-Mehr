<template>
  <v-container class="py-12 mt-6">
    <v-row justify="center" class="mb-12">
      <v-col cols="12" class="text-center">
        <h1 class="text-h4 font-weight-black primary--text mb-3">
          {{ t.pageTitle }}
        </h1>
        <p class="text-subtitle-1 grey--text text--darken-1">
          {{ t.pageSubtitle }}
        </p>
      </v-col>
    </v-row>

    <div v-for="(category, index) in t.categories" :key="index" class="mb-12">
      <div class="d-flex align-center mb-6">
        <v-icon color="primary" size="32" class="ml-3">
          {{ category.icon }}
        </v-icon>
        <div>
          <h2 class="text-h5 font-weight-black primary--text">
            {{ category.title }}
          </h2>
          <span class="text-caption grey--text text--darken-1">
            {{ category.subtitle }}
          </span>
        </div>
      </div>

      <v-row>
        <v-col
          v-for="(item, idx) in category.items"
          :key="idx"
          cols="12"
          sm="6"
          md="4"
        >
          <v-card outlined class="service-card pa-6 h-100 d-flex flex-column rounded-xl transition-swing">
            <div class="d-flex align-center mb-4">
              <v-avatar color="blue lighten-5" size="48" class="ml-4">
                <v-icon color="primary">{{ item.icon }}</v-icon>
              </v-avatar>
              <h3 class="text-subtitle-1 font-weight-bold primary--text">
                {{ item.title }}
              </h3>
            </div>
            <p class="text-body-2 grey--text text--darken-2 mb-0 lh-lg">
              {{ item.description }}
            </p>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'ServicesPage',
  
  computed: {
    // زبان فعلی
    currentLang() {
      return this.$store.state.auth.locale || 'fa'
    },
    
    // ترجمه 
    t() {
      const translations = {
        // متون فارسی
        fa: {
          pageTitle: 'خدمات و راهکارهای تخصصی',
          pageSubtitle: 'ارائه هوشمندترین راهکارهای نرم‌افزاری و زیرساختی برای توسعه کسب‌وکار شما',
          categories: [
            {
              title: 'برنامه نویسی تحت وب',
              subtitle: 'عملکرد روان، سریع و بی‌نقص سرویس‌های آنلاین',
              icon: 'mdi-code-braces',
              items: [
                { title: 'توسعه فرانت‌اند', description: 'طراحی و اجرای بخش کاربری با فریم‌ورک‌های مدرن و واکنش‌گرا.', icon: 'mdi-monitor-dashboard' },
                { title: 'خدمات بک‌اند', description: 'پیاده‌سازی معماری‌های امن، مقیاس‌پذیر و پایگاه داده‌های بهینه.', icon: 'mdi-server' },
                { title: 'توسعه و یکپارچه‌سازی API', description: 'اتصال سیستم‌ها و تبادل استاندارد داده‌ها با امنیت بالا.', icon: 'mdi-api' },
                { title: 'بهینه‌سازی عملکرد', description: 'افزایش چشمگیر سرعت لود، کارایی کدهای قدیمی و رندرینگ.', icon: 'mdi-speedometer' },
                { title: 'پشتیبانی مداوم', description: 'پایش مستمر و رفع باگ سیستم‌ها در بالاترین سطح دسترسی.', icon: 'mdi-headset' }
              ]
            },
            {
              title: 'طراحی وب‌سایت',
              subtitle: 'همگام با اهداف، استراتژی و چشم‌انداز برند شما',
              icon: 'mdi-web',
              items: [
                { title: 'طراحی رابط کاربری مدرن', description: 'خلق تجربه‌های بصری لوکس، کاربرپسند و اختصاصی.', icon: 'mdi-palette-outline' },
                { title: 'طراحی واکنش‌گرا', description: 'نمایش بی‌نقص و بهینه‌شده روی موبایل، تبلت و دسکتاپ.', icon: 'mdi-cellphone-link' },
                { title: 'شخصی‌سازی برند', description: 'هویت‌بخشی بصری متناسب با تم سازمانی و جامعه هدف.', icon: 'mdi-vector-shape' },
                { title: 'دسترسی راحت', description: 'ساده‌سازی فرآیندهای ناوبری جهت تعامل سریع‌تر کاربران.', icon: 'mdi-gesture-tap' },
                { title: 'افزایش عملکرد', description: 'ارتقای ساختار وب‌سایت‌ها به استانداردهای مدرن سئو و وب.', icon: 'mdi-rocket-launch' },
                { title: 'به‌روزرسانی‌های مستمر', description: 'توسعه قابلیت‌های جدید همگام با تغییرات کسب‌وکار.', icon: 'mdi-refresh' }
              ]
            },
            {
              title: 'راهکارهای سازمانی',
              subtitle: 'سیستم‌های اتوماسیون، زیرساخت ابری و تحلیل دقیق داده‌ها',
              icon: 'mdi-office-building',
              items: [
                { title: 'امنیت سایبری پیشرفته', description: 'محافظت همه‌جانبه از داده‌های حساس و مقابله با تهدیدات.', icon: 'mdi-shield-lock' },
                { title: 'قدرت ابری', description: 'میزبانی و مدیریت منابع بر بستر ابر با انعاف و پایداری بالا.', icon: 'mdi-cloud-tags' },
                { title: 'مدیریت داده‌ها', description: 'جمع‌آوری، ذخیره‌سازی و تحلیل هوشمند داده‌های ساختاریافته.', icon: 'mdi-database' },
                { title: 'اتوماسیون گردش کار', description: 'حذف فرآیندهای کاغذی و افزایش بهینه راندمان اداری.', icon: 'mdi-cached' },
                { title: 'مشاوره راهبردی', description: 'هدایت فنی و ارائه نقشه راه دقیق جهت اجرای پروژه‌های نرم‌افزاری.', icon: 'mdi-lightbulb-on' }
              ]
            }
          ]
        },
        // متون انگلیسی
        en: {
          pageTitle: 'Specialized Services',
          pageSubtitle: 'Providing the smartest software solutions for your business growth',
          categories: [
            {
              title: 'Web Development',
              subtitle: 'Smooth, fast, and flawless performance',
              icon: 'mdi-code-braces',
              items: [
                { title: 'Frontend Development', description: 'Designing user interfaces using modern and responsive frameworks.', icon: 'mdi-monitor-dashboard' },
                { title: 'Backend Services', description: 'Implementing secure architectures and optimized databases.', icon: 'mdi-server' },
                { title: 'API Integration', description: 'Connecting systems with secure data exchange.', icon: 'mdi-api' },
                { title: 'Performance Tuning', description: 'Significantly increasing loading speed and code efficiency.', icon: 'mdi-speedometer' },
                { title: 'Continuous Support', description: '24/7 system monitoring and bug fixing.', icon: 'mdi-headset' }
              ]
            },
            {
              title: 'Website Design',
              subtitle: 'In sync with your goals, strategy, and brand vision',
              icon: 'mdi-web',
              items: [
                { title: 'Modern UI Design', description: 'Creating luxurious, user-friendly, and exclusive visual experiences.', icon: 'mdi-palette-outline' },
                { title: 'Responsive Design', description: 'Flawless and optimized display on mobile, tablet, and desktop.', icon: 'mdi-cellphone-link' },
                { title: 'Brand Customization', description: 'Visual identity tailoring suited to corporate themes and target audiences.', icon: 'mdi-vector-shape' },
                { title: 'Easy Access', description: 'Streamlining navigation processes for faster user interactions.', icon: 'mdi-gesture-tap' },
                { title: 'Performance Boost', description: 'Upgrading website architecture to modern web and SEO standards.', icon: 'mdi-rocket-launch' },
                { title: 'Continuous Updates', description: 'Developing new features alongside your business growth.', icon: 'mdi-refresh' }
              ]
            },
            {
              title: 'Enterprise Solutions',
              subtitle: 'Automation systems, cloud infrastructure, and precise data analytics',
              icon: 'mdi-office-building',
              items: [
                { title: 'Advanced Cybersecurity', description: 'Comprehensive protection of sensitive data against modern threats.', icon: 'mdi-shield-lock' },
                { title: 'Cloud Power', description: 'Resource hosting and management on cloud platforms with high stability.', icon: 'mdi-cloud-tags' },
                { title: 'Data Management', description: 'Intelligent collection, storage, and processing of structured data.', icon: 'mdi-database' },
                { title: 'Workflow Automation', description: 'Eliminating paper processes and optimizing administrative efficiency.', icon: 'mdi-cached' },
                { title: 'Strategic Consulting', description: 'Technical guidance and detailed roadmaps for software execution.', icon: 'mdi-lightbulb-on' }
              ]
            }
          ]
        }
      }
      return translations[this.currentLang] || translations.fa
    }
  }
}
</script>

<style scoped>
/* استایل کارت */
.service-card {
  background-color: #ffffff !important;
  border-color: #e2e8f0 !important;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

/* حالت هاور */
.service-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 20px rgba(31, 53, 86, 0.08) !important;
  border-color: #1f3556 !important;
}

/* فاصله خطوط */
.lh-lg {
  line-height: 1.8 !important;
}
</style>