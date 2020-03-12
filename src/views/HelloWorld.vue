<template>
  <div>
    <div>
      {{ msg }}
    </div>
  </div>
</template>

<script>
import { getList } from '@/api/table'

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted() {
    getList().then(res => {
      console.log(res)
    })
  }
}
</script>

<style scoped>
</style>
