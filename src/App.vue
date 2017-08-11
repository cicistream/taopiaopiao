<template>
  <div id="app">
 <!--  <div style="width: 1rem;height: 1rem;border: 2px solid red" @click="alert()"></div> -->
    <router-view></router-view>
   
<!--    <info></info> -->
  </div>
</template>

<script>

export default {
  name: 'app',
  data(){
    return {
    }
  },
   components:{

   }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
