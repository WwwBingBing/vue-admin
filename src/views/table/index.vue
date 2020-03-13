<template>
  <div class="dashboard-container">
    <div class="dashboard-text"> {{ msg }} </div>
  </div>
</template>

<script>

export default {
  name: 'Table',
  data() {
    return {
      msg: 'Table'
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
