module.exports = {
  // میان‌برهای مسیر
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js'
  },
  
  // پسوندهای فایل
  moduleFileExtensions: ['js', 'vue', 'json'],
  
  // کامپایلرها
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest'
  },
  
  // پوشش‌دهی تست
  collectCoverage: true,
  
  // مسیرهای تحت نظارت
  collectCoverageFrom: [
    'components/**/*.vue',
    'pages/**/*.vue',
    'utils/**/*.js',
    'rules/**/*.js',
    '!**/node_modules/**',
    '!**/.nuxt/**',
    '!**/coverage/**'
  ],
  
  // محیط شبیه‌سازی
  testEnvironment: 'jsdom',
  
  // الگوی تست‌ها
  testMatch: ['**/__tests__/**/*.spec.js', '**/?(*.)+(spec|test).js']
}