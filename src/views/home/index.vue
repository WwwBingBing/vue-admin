<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ userName }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters({
      'userName': 'name'
    })
  },
  mounted() {
    // 登陆
    this.$store.dispatch('user/login', { username: 'admin', password: 'asd' })
    // 获取用户信息
    this.$store.dispatch('user/getInfo')
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
