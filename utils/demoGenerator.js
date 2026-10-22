/*/ تولید رشته تصادفی از حروف کوچک انگلیسی و اعداد با طول مشخص
const randomString = (length = 6) => {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''
  for (let i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)]
  }
  return result
}

// تولید یک ایمیل دموی تصادفی با نام کاربری پیچیده و دامنه فرضی .test
export const generateDemoEmail = () => {
  const userPart = `demo.${randomString(5)}${Math.floor(Math.random() * 999)}`
  const domainPart = `${randomString(4)}.test`
  return `${userPart}@${domainPart}`
}

// تولید رمز عبور دموی تصادفی با فرمت استاندارد (شامل حروف بزرگ، کوچک، اعداد و کاراکتر خاص)
export const generateDemoPassword = () => {
  return `Pass@${randomString(4)}${Math.floor(Math.random() * 90 + 10)}`
}

// تولید هم‌زمان یک جفت اطلاعات ورود (ایمیل و رمز عبور) دموی کامل
export const generateDemoCredentials = () => {
  return {
    email: generateDemoEmail(),
    password: generateDemoPassword()
  }
}

// اطلاعات کاربری پیش‌فرض جهت تست سریع با سرویس و API خارجی reqres.in
export const DEFAULT_API_CREDENTIALS = {
  email: 'eve.holt@reqres.in',
  password: 'cityslicka'
}
  */