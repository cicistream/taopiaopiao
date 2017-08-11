<template>
  <div>
    <div class="content">
      <homehead></homehead>
      <foot></foot>
      <router-view></router-view>     
    </div>
  </div>
</template>

<script>
import homehead from './components/header';
import foot from './components/footer'
export default {
  name: 'home',
  components: {
    homehead,
    foot
  }
}
</script>
