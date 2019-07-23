<template>
  <div id="app">
    <MHeader></MHeader>
    <Tab></Tab>
    <router-view/>
  </div>
</template>
<script>
  import Tab from '@/components/tab/Tab'
  import MHeader from '@/components/m-header/m-header'

  export default {
    name: 'app',
    components: {
      Tab,MHeader
    }
  }
</script>
<style lang="stylus">
  @import "~@/common/stylus/variable.styl"
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color :$color-theme

#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      /*color #42b983*/
      color $color-theme
</style>
