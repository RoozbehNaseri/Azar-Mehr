import { getItem, setItem, removeItem, STORAGE_KEYS } from '@/utils/storage'

// وضعیت اولیه احراز هویت
export const state = () => ({
  user: null,
  token: null,
  isLoggedIn: false,
  locale: 'fa'
})

export const getters = {
  // استخراج نام نمایشی کاربر
  userName: (state) => {
    if (!state.user) return 'کاربر'
    return state.user.name || state.user.email?.split('@')[0] || 'کاربر'
  }
}

export const mutations = {
  // ثبت کاربر و وضعیت ورود
  SET_USER(state, user) {
    state.user = user
    state.isLoggedIn = !!user
  },
  // ذخیره توکن
  SET_TOKEN(state, token) {
    state.token = token
  },
  // پاک‌سازی سشن
  LOGOUT(state) {
    state.user = null
    state.token = null
    state.isLoggedIn = false
  },
  // تنظیم زبان
  SET_LOCALE(state, lang) {
    state.locale = lang
  }
}

export const actions = {
  // شبیه‌سازی ورود
  login({ commit }, userData) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const users = JSON.parse(localStorage.getItem('simulated_users') || '[]')
        const userExists = users.find(u => u.email === userData.email && u.password === userData.password)

        if (userExists || userData.email === 'admin@test.com') {
          const mockToken = 'mock-jwt-token-12345'
          const user = userExists || { name: 'مدیر سیستم', email: userData.email }

          commit('SET_USER', user)
          commit('SET_TOKEN', mockToken)
          setItem(STORAGE_KEYS.currentUser, user)
          localStorage.setItem('token', mockToken)
          resolve({ success: true })
        } else {
          resolve({ success: false, error: 'ایمیل یا رمز عبور اشتباه است' })
        }
      }, 1200)
    })
  },
  
  // خروج از حساب
  logout({ commit }) {
    commit('LOGOUT')
    removeItem(STORAGE_KEYS.currentUser)
    localStorage.removeItem('token')
  },
  
  // بازیابی سشن کلاینت
  autoLogin({ commit }) {
    if (process.client) {
      const user = getItem(STORAGE_KEYS.currentUser)
      const token = localStorage.getItem('token')
      if (user && token) {
        commit('SET_USER', user)
        commit('SET_TOKEN', token)
      }
    }
  },
  
  // شروع پروسه بازیابی
  restoreSession({ dispatch }) {
    dispatch('autoLogin')
  }
}