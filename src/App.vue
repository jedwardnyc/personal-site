<template>
  <div id="app">
    <portfolio-header v-if="this.$route.path !== '/'"/>
    <router-view class="route"/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #e9e9e9;
  background-color: #273047;
}
.route {
  height: 100vh;
}
* {
  margin: 0;
  color: #e9e9e9;
}
</style>
