export default ({ store }) => {
  // اجرای کد سمت کلاینت
  if (process.client) {
    // شنود سراسری خطاهای جاوااسکریپت
    window.addEventListener('error', (event) => {
      console.error('خطای سراسری کلاینت:', event.error)

      // ذخیره خطا در استور
      store.commit('SET_LAST_ERROR', {
        message: event.error?.message || 'Unknown error'
      })
    })
  }
}