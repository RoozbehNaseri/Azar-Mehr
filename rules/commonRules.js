// قانون اجباری بودن
export const requiredRule = (fieldName = 'این فیلد') => (value) => {
  if (!value || value.toString().trim() === '') {
    return `${fieldName} نمی‌تواند خالی باشد`
  }
  return true
}

// قانون حداقل طول
export const minLength = (min, fieldName = 'مقدار') => (value) => {
  if (!value) return true
  if (value.length < min) {
    return `${fieldName} باید حداقل ${min} کاراکتر باشد`
  }
  return true
}

// قانون حداکثر طول
export const maxLength = (max, fieldName = 'مقدار') => (value) => {
  if (!value) return true
  if (value.length > max) {
    return `${fieldName} باید حداکثر ${max} کاراکتر باشد`
  }
  return true
}

// قانون عددی بودن
export const numericRule = (fieldName = 'این فیلد') => (value) => {
  if (!value) return true
  if (!/^\d+$/.test(value)) {
    return `${fieldName} باید فقط شامل عدد باشد`
  }
  return true
}

// ترکیب قوانین زنجیره‌ای
export const composeRules = (...rules) => {
  return (value) => {
    for (const rule of rules) {
      const result = rule(value)
      // بازگشت اولین خطای یافت شده
      if (result !== true) return result
    }
    return true
  }
}