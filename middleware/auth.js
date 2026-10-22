export default function({ store, redirect }) {
  // چک کردن لاگین بودن
  if (!store.getters['auth/isLoggedIn']) {
    //فرتسادن به روت لاگین
    return redirect('/')
  }
}