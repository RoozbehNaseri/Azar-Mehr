<template>
  <v-row class="hero-section" align="center" justify="space-between">
    
    <v-col cols="12" md="6" class="text-center text-md-right">
      <div class="hero-mini text-uppercase mb-2">
        {{ t.mini }}
      </div>
      <h1 class="hero-title">
        {{ t.title }}
      </h1>
      <p class="hero-subtitle mt-3">
        {{ t.subtitle }}
      </p>
    </v-col>

    <v-col cols="12" md="6" class="text-center d-flex justify-center align-center">
      <div class="abstract-graphic-container" aria-hidden="true">
        <div class="glow-orb orb-primary"></div>
        <div class="glow-orb orb-accent"></div>
        
        <div class="glass-panel panel-main">
          <div class="panel-header">
            <span class="dot window-red"></span>
            <span class="dot window-yellow"></span>
            <span class="dot window-green"></span>
          </div>
          <div class="panel-body">
            <div class="skeleton-line line-long"></div>
            <div class="skeleton-line line-medium"></div>
            <div class="skeleton-line line-short"></div>
          </div>
        </div>

        <div class="glass-panel panel-chart">
          <div class="chart-container">
            <div class="chart-bar bar-orange"></div>
            <div class="chart-bar bar-navy"></div>
            <div class="chart-bar bar-muted"></div>
          </div>
        </div>
      </div>
    </v-col>

  </v-row>
</template>

<script>
export default {
  name: 'HeroSection',
  computed: {
    // زبان فعال
    currentLang() {
      return this.$store.state.auth.locale || 'fa'
    },
    // واژه‌نامه
    t() {
      const translations = {
        fa: {
          mini: 'شرکت دانش بنیان',
          title: 'آذر مهر پردازش',
          subtitle: 'پیشرو در توسعه فناوری‌های نوین، راهکارهای هوشمند وب و سیستم‌های یکپارچه دیجیتال.'
        },
        en: {
          mini: 'Knowledge-Based Company',
          title: 'Azar Mehr Pardazesh',
          subtitle: 'Leader in developing cutting-edge technologies, smart web solutions, and integrated digital systems.'
        }
      }
      return translations[this.currentLang]
    }
  }
}
</script>

<style scoped>
/* باکس هیرو */
.hero-section {
  background: linear-gradient(180deg, #f7f7f9 0%, #f3f4f6 100%);
  border-radius: 0 0 38px 38px;
  padding: 48px 36px 80px;
  margin-bottom: 24px;
  border-bottom: 1px solid #e2e8f0;
}

/* پیش‌تیتر */
.hero-mini {
  color: #f97316;
  font-size: 1.1rem;
  letter-spacing: 1px;
  font-weight: 700;
}

/* تیتر اصلی */
.hero-title {
  font-size: 3.5rem;
  font-weight: 900;
  color: #1e3a8a;
  line-height: 1.3;
}

/* توضیحات */
.hero-subtitle {
  color: #4f5563;
  font-size: 1.25rem;
  line-height: 1.7;
}

/* کانتینر گرافیک */
.abstract-graphic-container {
  position: relative;
  width: 100%;
  max-width: 420px;
  height: 280px;
  margin: 0 auto;
}

/* هاله‌های نوری */
.glow-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(20px);
  opacity: 0.6;
}
/* هاله آبی */
.orb-primary {
  width: 150px;
  height: 150px;
  background: radial-gradient(circle, rgba(30, 58, 138, 0.2) 0%, transparent 70%);
  top: 10%;
  left: 15%;
}
/* هاله نارنجی */
.orb-accent {
  width: 130px;
  height: 130px;
  background: radial-gradient(circle, rgba(249, 115, 22, 0.15) 0%, transparent 70%);
  bottom: 15%;
  right: 15%;
}

/* افکت شیشه‌ای */
.glass-panel {
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.05);
  position: absolute;
  transition: transform 0.3s ease;
}

/* پنل اصلی */
.panel-main {
  width: 240px;
  height: 160px;
  top: 15%;
  right: 10%;
  transform: rotate(-3deg);
  padding: 16px;
}
/* هدر پنجره */
.panel-header {
  display: flex;
  gap: 6px;
  margin-bottom: 16px;
}
/* کنترلر پنجره */
.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}
.window-red { background-color: #ef4444; }
.window-yellow { background-color: #f59e0b; }
.window-green { background-color: #10b981; }

/* اسکلتون متن */
.skeleton-line {
  height: 6px;
  background-color: #e2e8f0;
  border-radius: 4px;
  margin-bottom: 12px;
}
.line-long { width: 85%; background-color: #cbd5e1; }
.line-medium { width: 60%; }
.line-short { width: 40%; }

/* پنل نمودار */
.panel-chart {
  width: 180px;
  height: 130px;
  bottom: 10%;
  left: 8%;
  transform: rotate(5deg);
  padding: 16px;
  display: flex;
  align-items: flex-end;
}
/* کانتینر نمودار */
.chart-container {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 16px;
  width: 100%;
  height: 100%;
}
/* میله‌های نمودار */
.chart-bar {
  width: 20px;
  border-radius: 6px;
  transition: height 0.3s ease;
}
.bar-orange { height: 50px; background-color: #f97316; }
.bar-navy { height: 85px; background-color: #1e3a8a; }
.bar-muted { height: 65px; background-color: #94a3b8; }

/* ریسپانسیو */
@media (max-width: 960px) {
  .hero-section {
    padding: 36px 18px 50px;
  }
  .hero-title {
    font-size: 2.3rem;
  }
  .hero-subtitle {
    font-size: 1.1rem;
  }
  .abstract-graphic-container {
    margin-top: 32px;
    height: 240px;
    max-width: 340px;
  }
  .panel-main {
    width: 200px;
    height: 140px;
  }
  .panel-chart {
    width: 150px;
    height: 110px;
  }
}
</style>