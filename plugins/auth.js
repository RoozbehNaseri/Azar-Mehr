export default ({ store }) => {
//بازیابی اطلاعات از لوکال استورج 
  store.dispatch('auth/restoreSession')
}