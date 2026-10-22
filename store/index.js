// وضعیت پایه اپلیکیشن
export const state = () => ({
  appName: 'آذر مهر پردازش',
  appVersion: '1.0.0',
  lastError: null // ذخیره خطای جاری
})

export const mutations = {
  // ثبت خطا در استور
  SET_LAST_ERROR(state, error) {
    state.lastError = error
  },
  // حذف خطای فعلی
  CLEAR_LAST_ERROR(state) {
    state.lastError = null
  }
}

export const actions = {
  // مدیریت پاک‌سازی خطاها
  clearLastError({ commit }) {
    commit('CLEAR_LAST_ERROR')
  }
}

export const getters = {
  // ترکیب نام و نسخه برنامه
  appTitle: (state) => `${state.appName} v${state.appVersion}`,
  // وضعیت وجود خطا 
  hasError: (state) => state.lastError !== null,
  // دسترسی به جزئیات خطا
  lastError: (state) => state.lastError
}