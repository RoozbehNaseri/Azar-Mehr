// کپی با روش جدید و قدیمی
export const copyToClipboard = async (text) => {
  try {
    //   استفاده از ابزار مدرن مرورگر
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text)
      return true
    }
    
    // روش جایگزین: ساخت المان مخفی برای دستور کپی قدیمی
    const textarea = document.createElement('textarea')
    textarea.value = text
    textarea.style.position = 'fixed'
    textarea.style.opacity = '0'
    document.body.appendChild(textarea)
    textarea.select()
    const success = document.execCommand('copy')
    document.body.removeChild(textarea)
    
    return success
  } catch (error) {
    console.error('Copy failed:', error)
    return false
  }
}

// کپی متن به همراه نمایش پیام نتیجه به کاربر
export const copyWithFeedback = async (text, showMessage) => {
  const success = await copyToClipboard(text)
  // اعلام وضعیت به کاربر
  success ? showMessage('با موفقیت کپی شد', 'success') : showMessage('خطا در کپی متن', 'error')
}