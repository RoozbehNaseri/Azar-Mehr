export default {
  // تعیین ساختار پروژه روی سرور و فعال‌سازی قابلیت رندر سمت سرور (SSR)
  target: 'server',
  ssr: true,
  
  // تنظیمات پورت و هاست برای اجرای محلی پروژه
  server: { port: 3000, host: 'localhost' },
  
  // تنظیمات سئو، متاتگ‌ها، فونت‌ها و مشخصات هدر اصلی صفحات (Head)
  head: {
    title: 'آذر مهر پردازش | سامانه احراز هویت',
    htmlAttrs: { lang: 'fa', dir: 'rtl' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: 'سامانه ورود و ثبت‌نام حرفه‌ای با قابلیت ذخیره‌سازی محلی و پشتیبانی از دو زبان فارسی و انگلیسی' },
      { name: 'keywords', content: 'ورود, ثبت‌نام, احراز هویت, Nuxt, Vuetify' },
      { name: 'author', content: 'آذر مهر پردازش' },
      { name: 'theme-color', content: '#1f3556' },
      { property: 'og:title', content: 'آذر مهر پردازش - سامانه احراز هویت' },
      { property: 'og:description', content: 'تجربه مدرن ورود و ثبت‌نام با طراحی حرفه‌ای' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: '/og-image.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true }
    ]
  },
  
  // بارگذاری فایل‌های استایل CSS و افزونه‌های ظاهری به صورت سراسری
  css: [
    'vuetify/dist/vuetify.min.css',
    '~/assets/css/global.css'
  ],

  // فعال‌سازی قابلیت شناسایی و کامپوننت‌سازی خودکار بدون نیاز به Import دستی
  components: true,
  
  // ماژول‌های اصلی اکوسیستم نوکست (ویوتیفای، سیستم چندزبانه و کلاینت اکسیوس)
  modules: [
    '@nuxtjs/vuetify',
    '@nuxtjs/i18n',
    '@nuxtjs/axios'
  ],
  
  // پیکربندی پیش‌فرض ماژول اکسیوس برای ارتباط با API
  axios: {
    baseURL: process.env.API_URL || 'https://reqres.in/api',
    browserBaseURL: process.env.API_URL || 'https://reqres.in/api',
    credentials: false,
    debug: process.env.NODE_ENV === 'development'
  },
  
  // تنظیمات جامع پوسته کامپوننت‌های ویوتیفای، متریال دیزاین و پالت‌های رنگی لایت/دارک
  vuetify: {
    rtl: true,
    treeShake: true,
    defaultAssets: { font: true, icons: 'mdi' },
    options: {
      rtl: { fa: true, en: false },
      customProperties: true,
      themeVariations: ['dark', 'light']
    },
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '#1f3556',
          'primary-darken': '#2c466e',
          accent: '#ff7a3d',
          'accent-soft': '#fff1e9',
          success: '#16a34a',
          'success-soft': '#dcfce7',
          error: '#dc2626',
          'error-soft': '#fee2e2',
          background: '#f6f6f8',
          surface: '#ffffff'
        },
        dark: {
          primary: '#3a5a8c',
          accent: '#ff9a6d',
          success: '#2ecc71',
          error: '#e74c3c'
        }
      }
    }
  },
  
  // پیکربندی چندزبانگی i18n، مدیریت کوکی‌ها، سئو و دایرکتوری فایل‌های ترجمه JSON
  i18n: {
    locales: [
      { code: 'fa', name: 'فارسی', iso: 'fa-IR', dir: 'rtl', file: 'fa.json' },
      { code: 'en', name: 'English', iso: 'en-US', dir: 'ltr', file: 'en.json' }
    ],
    defaultLocale: 'fa',
    lazy: true,
    langDir: 'locales/',
    vueI18n: {
      fallbackLocale: 'fa',
      silentTranslationWarn: true,
      formatFallbackMessages: true
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: true,
      fallbackLocale: 'fa',
      onlyOnRoot: true
    },
    strategy: 'prefix_except_default',
    seo: true,
    parsePages: false,
    pages: {}
  },
  
  // تعریف پلاگین‌های اختصاصی برنامه و مشخص کردن لایه اجرا (سمت کلاینت یا سرور)
  plugins: [
    { src: '~/plugins/auth.js', mode: 'client' },
    { src: '~/plugins/auth.client.js', mode: 'client' },
    '~/plugins/i18n.js',
    '~/plugins/error-handler.js'
  ],
  
  // تنظیمات روتر کامپوننت‌ها و استایل کلاس‌های لینک فعال سیستم
  router: {
    middleware: [],
    trailingSlash: false,
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-active-link'
  },
  
  // بهینه‌سازی کدهای وب‌پک، چانک‌بندی پکیج‌ها و حذف کدهای دیباگ در حالت کامپایل نهایی
  build: {
    analyze: process.env.NODE_ENV === 'development' ? {
      analyzerMode: 'static',
      openAnalyzer: false
    } : false,
    
    optimization: {
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            name: 'vendors',
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: 'all'
          },
          vuetify: {
            name: 'vuetify',
            test: /[\\/]node_modules[\\/]vuetify[\\/]/,
            priority: 20
          },
          i18n: {
            name: 'i18n',
            test: /[\\/]node_modules[\\/]@nuxtjs[\\/]i18n[\\/]/,
            priority: 15
          }
        }
      }
    },
    
    terser: {
      terserOptions: {
        compress: {
          drop_console: process.env.NODE_ENV === 'production',
          drop_debugger: true
        }
      }
    },
    
    extractCSS: true,
    filenames: {
      app: ({ isDev }) => isDev ? '[name].js' : '[chunkhash].js',
      chunk: ({ isDev }) => isDev ? '[name].js' : '[chunkhash].js'
    },
    
    transpile: [/@nuxtjs\/vuetify/],
    
    loaders: {
      vue: {
        transformAssetUrls: {
          video: 'src',
          source: 'src',
          img: 'src',
          image: 'xlink:href'
        }
      }
    },
    
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.devtool = 'eval-source-map'
      }
      if (!isDev && isClient) {
        config.optimization = {
          ...config.optimization,
          minimize: true
        }
      }
    },
    
    publicPath: '/_nuxt/',
    
    budgets: {
      base: '100kb',
      static: '200kb',
      js: '300kb'
    }
  },
  
  // مدیریت سرور رندرینگ، فشرده‌سازی خروجی Gzip و کش استاتیک ابزارها
  render: {
    static: {
      maxAge: '1y',
      setHeaders(res, path) {
        if (path.endsWith('.html')) {
          res.setHeader('Cache-Control', 'public, max-age=3600')
        }
      }
    },
    compressor: { threshold: 1024 },
    bundleRenderer: {
      shouldPreload: (file, type) => {
        if (type === 'script' || type === 'style') return true
        return false
      }
    },
    http2: { push: true }
  },
  
  // تنظیمات وب‌اپلیکیشن پیش‌رونده (PWA)، مانیفست و کش هوشمند درخواست‌ها در حالت آفلاین
  pwa: {
    manifest: {
      name: 'آذر مهر پردازش',
      short_name: 'آذر مهر',
      lang: 'fa',
      display: 'standalone',
      theme_color: '#1f3556',
      background_color: '#f6f6f8',
      icons: [
        {
          src: '/icons/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: '/icons/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    },
    workbox: {
      runtimeCaching: [
        {
          urlPattern: 'https://reqres.in/api/.*',
          handler: 'networkFirst',
          method: 'GET'
        },
        {
          urlPattern: '/_nuxt/.*',
          handler: 'cacheFirst'
        },
        {
          urlPattern: '/images/.*',
          handler: 'cacheFirst'
        }
      ]
    }
  },
  
  // متغیرهای محیطی عمومی در دسترس کل صفحات پروژه
  env: {
    APP_NAME: 'Azarmehr Pardazesh',
    APP_VERSION: '1.0.0',
    API_BASE_URL: process.env.API_URL || 'https://reqres.in/api',
    NODE_ENV: process.env.NODE_ENV
  },
  
  // تنظیمات افکت خط بارگذاری بالای صفحه و کامپوننت لودینگ اولیه
  loading: { color: '#1f3556', height: '3px', continuous: true, throttle: 200 },
  loadingIndicator: { name: 'circle', color: '#1f3556', background: '#f6f6f8' },
  
  // تنظیمات مربوط به کش کامپوننت‌ها و نادیده گرفتن فایل‌های تست در فرآیند بیلد نهایی
  cache: { max: 1000, maxAge: 900000 },
  ignore: ['**/*.spec.js', '**/*.test.js', '**/__tests__/**'],
  generate: { fallback: true, interval: 200, subFolders: true },
  static: { prefix: true }
}