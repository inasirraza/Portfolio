<template>
  <div class="cards">
      <app-card v-for="(project, index) in vueProjects" :key="index" :project="project"></app-card>
  </div>
</template>

<script>
import Card from './VueCard.vue'
import {mapGetters} from 'vuex'
export default {
    computed:{
        ...mapGetters([
            'vueProjects'
        ])
    },
    components:{
        appCard : Card
    }

}
</script>

<style lang="scss" scoped>
.cards{
    max-width: 114rem;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, max-content));
    grid-gap: 2rem;
    justify-content: center;

    @media only screen and (max-width: 500px) {
        grid-gap: 1rem;
        grid-template-columns: repeat(auto-fit, minmax(25rem, max-content));
    }

}

</style>