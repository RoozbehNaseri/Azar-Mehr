module.exports = {
  // تبدیل کد مدرن
  presets: [
    '@babel/preset-env'
  ],
  
  env: {
    test: {
      presets: [
        // هدف‌گذاری نسخه فعلی
        ['@babel/preset-env', { targets: { node: 'current' } }]
      ]
    }
  }
}