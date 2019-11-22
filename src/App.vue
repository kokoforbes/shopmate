<template>
  <div id="app">
    <navbar />
    <router-view />
    <navBottom />
  </div>
</template>
<script>
import navbar from './components/navBar'
import navBottom from './components/navBottom'

export default {
  name: 'app',
  components: { navbar, navBottom }
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
