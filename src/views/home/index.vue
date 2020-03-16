<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name: {{ userName }}</div>
    <div> {{ count }} </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  data() {
    return {
      count: 0
    }
  },
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
    this.NumAutoPlusAnimation({ time: 1500, num: 123456, regulator: 50 })
  },
  methods: {
    NumAutoPlusAnimation(options) { // 数字增长函数
      options = options || {}
      const time = options.time || 1500// 总时间--毫秒为单位
      const finalNum = options.num || 100000 // 要显示的真实数值
      const regulator = options.regulator || 100 // 调速器，改变regulator的数值可以调节数字改变的速度
      const step = finalNum / (time / regulator) // 增速
      let count = -step// 计数器
      let initial = 0
      const timer = setInterval(() => {
        count = count + step
        if (count >= finalNum) {
          clearInterval(timer)
          count = finalNum
        }
        // t未发生改变的话就直接返回
        // 避免调用text函数，提高DOM性能
        var t = Math.floor(count)
        if (t === initial) return
        initial = t
        this.count = initial
      }, 30)
    }
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
