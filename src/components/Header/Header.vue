<template>
    <div>
        <app-navigation></app-navigation>
        <app-hero></app-hero>
        <app-contact class="contact" @toggle="toggle"></app-contact>
        <button class="circle-btn" @click="toggle"><i class="fa fa-envelope"></i></button>
    </div>
</template>

<script>
import Navigation from './Navigation.vue'
import Hero from './Hero.vue'
import Contact from './Contactus.vue'
export default {
    data(){
        return{
            show : false
        }
    },
    methods:{
        toggle(){
            this.show = !this.show
            if(this.show){
                document.querySelector('.contact').style.transform = `translateX(0)`
            }else{
                document.querySelector('.contact').style.transform = `translateX(100%)`
            }
        }
    },
    components:{
        appNavigation : Navigation,
        appHero : Hero,
        appContact : Contact
    }
}
</script>

<style lang="scss" scoped>
$primary-color: #1A374D;
$secondary-color: #406882;
$tertiary-color: #6998AB;

.contact{
    transition: all .4s;
    transform: translateX(100%);
}
.circle-btn{
    position: fixed;
    right: 4rem;
    bottom: 4rem;
}

</style>