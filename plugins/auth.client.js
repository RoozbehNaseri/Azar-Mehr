export default ({ store }) => {
  //ورود خودکار(بازیابی سشن) توی راه اندازی اولیه 
  store.dispatch('auth/autoLogin')
}