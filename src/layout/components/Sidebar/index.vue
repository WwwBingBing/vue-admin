<template>
  <div>
    <logo v-if="showLogo" :collapse="isCollapse" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import logo from './Logo'
import variables from '@/styles/variables.scss'

export default {
  components: {
    logo
  },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    routes() {
      return this.$router.options.routes
    },
    showLogo() {
      return this.$store.state.settings.sidebarLogo
    },
    isCollapse() {
      return !this.sidebar.opened
    },
    variables() {
      return variables
    }
  }
}
</script>
