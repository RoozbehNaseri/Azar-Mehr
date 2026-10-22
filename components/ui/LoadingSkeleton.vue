<template>
  <div class="skeleton-wrapper">
    <v-skeleton-loader
      :type="type"
      class="mx-auto"
      elevation="0"
    />
  </div>
</template>

<script>
export default {
  name: 'LoadingSkeleton',
  
  // ورودی‌ها
  props: {
    // نوع اسکلتون
    type: {
      type: String,
      default: 'card'
    }
  }
}
</script>

<style scoped>
/* استایل اصلی */
.skeleton-wrapper {
  width: 100%;
  padding: 16px;
}
</style>