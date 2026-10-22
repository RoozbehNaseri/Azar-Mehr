// کلیدهای ثابت
export const STORAGE_KEYS = {
  sessionToken: 'azarmehr_session_token',
  rememberedEmail: 'azarmehr_remembered_email',
  registeredUsers: 'azarmehr_registered_users',
  currentUser: 'azarmehr_current_user'
}

// ذخیره‌سازی داده
export const setItem = (key, value) => {
  try {
    const serialized = typeof value === 'object' ? JSON.stringify(value) : value
    localStorage.setItem(key, serialized)
  } catch (error) {
    console.warn('خطا ذخیره‌سازی:', key, error)
  }
}

// دریافت داده
export const getItem = (key, isJson = false) => {
  try {
    const value = localStorage.getItem(key)
    if (value === null) return null
    return isJson ? JSON.parse(value) : value
  } catch (error) {
    console.warn('خطا دریافت:', key, error)
    return null
  }
}

// حذف داده
export const removeItem = (key) => {
  localStorage.removeItem(key)
}

// دریافت کاربران
export const getRegisteredUsers = () => {
  return getItem(STORAGE_KEYS.registeredUsers, true) || []
}

// ذخیره کاربران
export const saveRegisteredUsers = (users) => {
  setItem(STORAGE_KEYS.registeredUsers, users)
}

// جستجوی ایمیل
export const findUserByEmail = (email) => {
  const users = getRegisteredUsers()
  return users.find(user => user.email?.toLowerCase() === email.toLowerCase()) || null
}

// بررسی ثبت‌نام
export const isEmailRegistered = (email) => {
  const users = getRegisteredUsers()
  return users.some(user => user.email?.toLowerCase() === email.toLowerCase())
}

// افزودن کاربر
export const addNewUser = (userData) => {
  const users = getRegisteredUsers()
  const newUser = {
    id: 'user_' + Date.now(),
    name: userData.name,
    email: userData.email,
    password: userData.password,
    createdAt: new Date().toISOString()
  }
  users.push(newUser)
  saveRegisteredUsers(users)
  return newUser
}