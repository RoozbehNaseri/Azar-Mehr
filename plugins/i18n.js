import Vue from 'vue'

// میکسین سراسری
Vue.mixin({
  methods: {
    // اسم مستعار متد اصلی 
    $tr(key) {
      return this.$t(key)
    }
  }
})