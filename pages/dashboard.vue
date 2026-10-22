<template>
  <div>
    <AppHeader />
    
    <v-main>
      <v-container>
        <v-card outlined rounded="lg" class="pa-6">
          <v-card-title class="text-h4">
            پنل کاربری
          </v-card-title>
          
          <v-card-text>
            <v-alert type="success" text class="mb-4">
              به پنل کاربری خود خوش آمدید.
            </v-alert>
            
            <v-row>
              <v-col cols="12" md="6">
                <v-list>
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title class="font-weight-bold">نام کاربری</v-list-item-title>
                      <v-list-item-subtitle>{{ userName }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title class="font-weight-bold">ایمیل</v-list-item-title>
                      <v-list-item-subtitle>{{ userEmail }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  
                  <v-list-item>
                    <v-list-item-content>
                      <v-list-item-title class="font-weight-bold">وضعیت</v-list-item-title>
                      <v-list-item-subtitle>
                        <v-chip color="success" small>آنلاین</v-chip>
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-col>
              
              <v-col cols="12" md="6" class="d-flex align-center">
                <v-btn
                  color="error"
                  block large
                  @click="logout"
                >
                  خروج از حساب
                  <v-icon right>mdi-logout</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-container>
    </v-main>
    
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'

export default {
  name: 'DashboardPage',
  components: { AppHeader, AppFooter },
  middleware: 'auth',
  
  computed: {
    userName() {
      return this.$store.state.auth.userName || 'کاربر گرامی'
    },
    userEmail() {
      return this.$store.state.auth.userEmail || 'ایمیل ثبت نشده'
    }
  },
  
  methods: {
    async logout() {
      await this.$store.dispatch('auth/logout')
      this.$router.push('/')
    }
  }
}
</script>