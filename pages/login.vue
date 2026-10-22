<template>
  <div class="page" dir="rtl">
    
    <header class="header">
      <div class="header-inner">
        <nav class="nav">
          <a href="#" class="active" @click.prevent>خانه</a>
          <a href="#" @click.prevent>خدمات ما</a>
          <a href="#" @click.prevent>مشتریان ما</a>
          <a href="#" @click.prevent>ماموریت ما</a>
          <a href="#" @click.prevent>درباره ما</a>
          <a href="#" @click.prevent>نحوه همکاری</a>
          <a href="#" @click.prevent>تماس با ما</a>
        </nav>

        <div class="brand">
          <div class="brand-badge">
            <div class="brand-logo"></div>
          </div>
          <div class="brand-text">
            <span class="brand-mini">شرکت دانش بنیان</span>
            <strong class="brand-title">رستا</strong>
          </div>
        </div>

        <div class="header-actions">
          <div class="lang-switcher">
            <button type="button" class="lang-btn">English</button>
            <button type="button" class="lang-btn active">فارسی</button>
          </div>
          <button type="button" class="header-login-btn">
            ورود / Login
          </button>
        </div>
      </div>
    </header>

    <main class="main">
      
      <section class="hero">
        <div class="hero-copy">
          <div class="hero-mini">شرکت دانش بنیان</div>
          <h1 class="hero-title">رستا</h1>
          <p class="hero-subtitle">همراه شما در توسعه دیجیتال</p>
        </div>

        <div class="hero-art" aria-hidden="true">
          <div class="illustration">
            <div class="bubble b1"></div>
            <div class="bubble b2"></div>
            <div class="bubble b3"></div>
            <div class="bubble b4"></div>

            <div class="desk">
              <div class="desk-leg"></div>
              <div class="desk-leg-2"></div>
            </div>

            <div class="laptop orange lap1"></div>
            <div class="laptop lap2"></div>

            <div class="person p1">
              <div class="head"></div>
              <div class="body"></div>
              <div class="legs"></div>
            </div>

            <div class="person p2">
              <div class="head"></div>
              <div class="body" style="background:#ffffff;"></div>
              <div class="legs" style="box-shadow:18px 0 0 #ff7a3d;background:#ff7a3d;"></div>
            </div>

            <div class="person p3">
              <div class="head"></div>
              <div class="body"></div>
              <div class="legs"></div>
            </div>

            <div class="plant">
              <div class="leaf l1"></div>
              <div class="leaf l2"></div>
              <div class="pot"></div>
            </div>
          </div>
        </div>
      </section>

      <section class="panel-wrap">
        
        <div class="about-card">
          <p>
            ما از سال ۱۳۹۷ همراه شما هستیم و در توسعه وب، راهکارهای دیجیتال و بهبود فرایندهای کسب‌وکار فعالیت می‌کنیم. تمرکز ما روی ارائه تجربه‌ای حرفه‌ای، ساده و قابل اعتماد برای مشتریان است.
          </p>
          <p>
            <span class="rocket"></span>
            <span>بیایید با هم تجربه‌ای حرفه‌ای، امن و مدرن برای ورود و ثبت‌نام بسازیم.</span>
          </p>
        </div>

        <div class="auth-card">
          <div class="auth-tabs">
            <button type="button" class="auth-tab active">ورود</button>
            <button type="button" class="auth-tab">ثبت‌نام</button>
          </div>

          <div class="form-view active">
            <h2 class="panel-title">ورود به حساب کاربری</h2>
            <p class="panel-subtitle">برای ادامه، ایمیل و رمز عبور خود را وارد کنید.</p>

            <form @submit.prevent="handleLogin">
              <div class="form-group">
                <label class="form-label">ایمیل</label>
                <div class="input-wrap">
                  <input type="email" class="form-input" placeholder="ایمیل خود را وارد کنید" />
                </div>
              </div>

              <div class="form-group">
                <label class="form-label">رمز عبور</label>
                <div class="input-wrap">
                  <input type="password" class="form-input" placeholder="رمز عبور خود را وارد کنید" />
                  <button type="button" class="inline-btn">نمایش</button>
                </div>
              </div>

              <div class="form-actions">
                <label class="remember">
                  <input type="checkbox" />
                  <span>مرا به خاطر بسپار</span>
                </label>
                <a href="#" class="helper-link" @click.prevent>رمز عبور را فراموش کرده‌اید؟</a>
              </div>

              <button type="submit" class="primary-btn">ورود</button>
            </form>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <span>سیستم ورود و ثبت‌نام یکپارچه</span>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'AuthPage',
  
  // دیتای فرم
  data() {
    return {
    }
  },
  
  methods: {
    // ارسال فرم
    handleLogin() {
      console.log('فرم لاگین سابمیت شد');
    }
  }
}
</script>

<style scoped>
/* تنظیمات پوسته */
:root {
  --bg: #f6f6f8;
  --surface: #ffffff;
  --surface-2: #fbfbfc;
  --text: #1f2430;
  --text-soft: #6f7482;
  --primary: #1f3556;
  --primary-2: #2c466e;
  --accent: #ff7a3d;
  --accent-soft: #fff1e9;
  --border: #e5e7eb;
  --success: #16a34a;
  --success-soft: #dcfce7;
  --danger: #dc2626;
  --danger-soft: #fee2e2;
  --shadow: 0 18px 45px rgba(31, 53, 86, 0.10);
  --shadow-soft: 0 10px 25px rgba(31, 53, 86, 0.08);
  --radius-xl: 30px;
  --radius-lg: 22px;
  --radius-md: 16px;
  --radius-sm: 12px;
  --transition: all 0.25s ease;
  --persian-font: Tahoma, "Segoe UI", sans-serif;
}

* { box-sizing: border-box; }

.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: var(--persian-font);
  color: var(--text);
  background: radial-gradient(circle at top left, rgba(255, 122, 61, 0.05), transparent 20%),
              radial-gradient(circle at bottom right, rgba(31, 53, 86, 0.05), transparent 22%),
              var(--bg);
}

.header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.04);
}

.header-inner {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 20px;
  min-height: 86px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.brand { display: inline-flex; align-items: center; gap: 14px; }
.brand-badge {
  width: 64px; height: 64px; border-radius: 18px;
  background: #dbe8ea; display: grid; place-items: center;
  box-shadow: 0 8px 20px rgba(0,0,0,0.10);
  border: 1px solid rgba(31, 53, 86, 0.08); flex-shrink: 0;
}
.brand-logo {
  width: 34px; height: 34px; border-radius: 50%;
  background: conic-gradient(from 210deg, var(--primary) 0 40%, #0f766e 40% 70%, var(--accent) 70% 100%);
  position: relative;
}
.brand-logo::after {
  content: ""; position: absolute; inset: 9px;
  background: #fff; border-radius: 50%;
}
.brand-text { display: flex; flex-direction: column; gap: 4px; }
.brand-mini { color: var(--text-soft); font-size: 0.9rem; }
.brand-title { color: var(--text); font-size: 1.1rem; font-weight: 800; }

.nav { display: flex; align-items: center; gap: 24px; flex-wrap: wrap; color: #2f3440; font-size: 0.98rem; }
.nav a { position: relative; padding: 8px 0; color: #2f3440; text-decoration: none;}
.nav a.active::after {
  content: ""; position: absolute; inset-inline: 0; bottom: -18px;
  height: 2px; background: var(--text); border-radius: 999px;
}

.header-actions { display: flex; align-items: center; gap: 10px; }
.lang-switcher {
  display: inline-flex; align-items: center; background: #fff;
  border: 1px solid rgba(31, 53, 86, 0.10); border-radius: 999px;
  padding: 5px; box-shadow: var(--shadow-soft);
}
.lang-btn {
  border: none; background: transparent; color: var(--primary);
  border-radius: 999px; padding: 9px 14px; cursor: pointer;
  font-weight: 700; transition: var(--transition);
}
.lang-btn.active { background: var(--primary); color: #fff; }
.header-login-btn {
  border: 1px solid rgba(31, 53, 86, 0.1); background: #fff;
  color: var(--primary); padding: 11px 16px; border-radius: 999px;
  cursor: pointer; font-weight: 800; box-shadow: var(--shadow-soft);
  transition: var(--transition);
}

.main { width: 100%; max-width: 1240px; margin: 0 auto; padding: 26px 20px 40px; flex: 1; }

.hero {
  min-height: 420px; display: grid; grid-template-columns: 1.05fr 0.95fr;
  align-items: center; gap: 24px;
  background: linear-gradient(180deg, #f7f7f9 0%, #f3f4f6 100%);
  border-radius: 0 0 38px 38px; position: relative; overflow: hidden;
  padding: 38px 36px 70px; border: 1px solid rgba(31, 53, 86, 0.04);
}
.hero-copy { text-align: center; padding: 18px 10px; }
.hero-mini { color: #444a57; margin-bottom: 18px; font-size: 1.1rem; }
.hero-title { margin: 0 0 16px; font-size: clamp(2.4rem, 5vw, 4.3rem); font-weight: 900; color: #22262f; }
.hero-subtitle { margin: 0; color: #4f5563; font-size: 1.3rem; }

/* هنر اختصاصی CSS */
.hero-art { display: flex; align-items: center; justify-content: center; padding: 12px; }
.illustration { width: min(100%, 520px); height: 320px; position: relative; }

.desk { position: absolute; bottom: 64px; left: 10%; width: 72%; height: 12px; background: #fff; border: 2px solid rgba(34, 39, 48, 0.7); border-radius: 4px; }
.desk-leg, .desk-leg-2 { position: absolute; width: 4px; height: 105px; background: rgba(34, 39, 48, 0.7); bottom: -105px; }
.desk-leg { left: 8px; } .desk-leg-2 { right: 8px; }

.person { position: absolute; bottom: 78px; width: 88px; height: 170px; }
.person .head { width: 30px; height: 30px; background: #f7e1cf; border: 2px solid #1f2430; border-radius: 50%; margin: 0 auto; }
.person .body { width: 56px; height: 74px; margin: 6px auto 0; border-radius: 16px; border: 2px solid #1f2430; background: var(--accent); }
.person .legs { width: 12px; height: 58px; background: var(--primary); margin: 0 auto; position: relative; top: -2px; box-shadow: 18px 0 0 var(--primary); }

.person.p1 { left: 14%; }
.person.p2 { left: 46%; transform: scale(0.95); }
.person.p3 { right: 8%; height: 200px; }
.person.p3 .body { height: 92px; width: 58px; }

.laptop { position: absolute; width: 62px; height: 42px; border: 2px solid #1f2430; border-radius: 8px; background: rgba(255,255,255,0.9); }
.laptop.orange { background: var(--accent); }
.lap1 { left: 26%; bottom: 122px; transform: rotate(8deg); }
.lap2 { left: 56%; bottom: 122px; }

.plant { position: absolute; right: 0; bottom: 40px; width: 90px; height: 180px; }
.pot { position: absolute; bottom: 0; left: 22px; width: 46px; height: 82px; border-radius: 10px; background: #fff; border: 2px solid rgba(34,39,48,0.4); }
.leaf { position: absolute; width: 34px; height: 104px; background: var(--primary); border-radius: 50% 50% 8px 50%; top: 18px; transform-origin: bottom center; }
.leaf.l1 { left: 10px; transform: rotate(18deg); }
.leaf.l2 { right: 12px; transform: rotate(-18deg); }

.bubble { position: absolute; border: 2px solid rgba(31, 53, 86, 0.35); border-radius: 8px; background: rgba(255,255,255,0.75); }
.bubble::after { content: ""; position: absolute; bottom: -8px; left: 16px; width: 12px; height: 12px; background: inherit; border-inline-start: 2px solid rgba(31,53,86,0.35); border-bottom: 2px solid rgba(31,53,86,0.35); transform: rotate(-45deg); }
.b1 { top: 16px; left: 10%; width: 64px; height: 26px; }
.b2 { top: 38px; left: 28%; width: 54px; height: 22px; }
.b3 { top: 22px; right: 20%; width: 58px; height: 24px; }
.b4 { top: 56px; right: 34%; width: 50px; height: 22px; }

.panel-wrap { margin-top: -20px; display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 24px; align-items: start; }

.about-card {
  background: var(--surface); border-radius: 28px; box-shadow: var(--shadow);
  padding: 28px 30px; line-height: 2.1; border: 1px solid rgba(31, 53, 86, 0.06);
}
.about-card p { margin: 0 0 16px; font-size: 1.06rem; }
.rocket { color: var(--accent); font-size: 1.2rem; }

.auth-card {
  background: rgba(255,255,255,0.96); border-radius: 28px;
  box-shadow: var(--shadow); padding: 28px; border: 1px solid rgba(31, 53, 86, 0.07);
}
.auth-tabs { display: flex; background: #f3f4f6; border-radius: 999px; padding: 5px; gap: 6px; margin-bottom: 20px; }
.auth-tab { flex: 1; border: none; background: transparent; color: var(--primary); border-radius: 999px; padding: 12px 14px; cursor: pointer; font-weight: 800; }
.auth-tab.active { background: var(--primary); color: #fff; box-shadow: var(--shadow-soft); }

.panel-title { margin: 0 0 8px; font-size: 1.7rem; color: var(--primary); }
.panel-subtitle { margin: 0 0 22px; color: var(--text-soft); line-height: 1.9; }

.form-group { margin-bottom: 16px; }
.form-label { display: inline-block; margin-bottom: 8px; font-weight: 700; }
.input-wrap { position: relative; }
.form-input { width: 100%; border: 1px solid var(--border); padding: 14px 16px; border-radius: 14px; outline: none; transition: var(--transition); }
.form-input:focus { border-color: rgba(255, 122, 61, 0.38); box-shadow: 0 0 0 4px rgba(255, 122, 61, 0.10); }

.inline-btn { position: absolute; top: 50%; transform: translateY(-50%); left: 10px; border: none; background: transparent; color: var(--primary); cursor: pointer; font-weight: 800; }
.form-actions { display: flex; align-items: center; justify-content: space-between; margin-bottom: 18px; }
.remember { display: inline-flex; align-items: center; gap: 8px; cursor: pointer; color: var(--text-soft); }
.helper-link { color: var(--primary); font-weight: 800; text-decoration: none; }

.primary-btn { width: 100%; border: none; background: linear-gradient(135deg, var(--primary), var(--primary-2)); color: #fff; border-radius: 16px; padding: 15px 18px; cursor: pointer; font-weight: 900; box-shadow: 0 12px 30px rgba(31, 53, 86, 0.18); transition: var(--transition); }
.primary-btn:hover { transform: translateY(-1px); filter: brightness(1.02); }

.footer { max-width: 1240px; width: 100%; margin: 18px auto 0; padding: 10px 20px 28px; text-align: center; color: var(--text-soft); }

@media (max-width: 1100px) {
  .hero, .panel-wrap { grid-template-columns: 1fr; }
}
@media (max-width: 780px) {
  .hero-title { font-size: 2.7rem; }
  .illustration { height: 280px; }
}
</style>