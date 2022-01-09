<template>
  <div class="main">
    <app-categories class="categories"></app-categories>
    <router-view></router-view>
  </div>
</template>

<script>
import Categories from './Categories.vue'

export default {
  components:{
    appCategories : Categories
  }
}
</script>

<style lang="scss" scoped>
.main{
  min-height: 80vh;
  position: relative;
  background-color: rgba(0, 0, 0, 0.2);
}
</style>