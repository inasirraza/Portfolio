<template>
<div>
    <app-header></app-header>
    <router-view></router-view>
    <app-about></app-about>
    <app-footer></app-footer>
</div>
</template>

<script>
import Header from './Header/Header.vue'
import About from './About/About.vue'
import Footer from './Footer/Footer.vue'
export default {
    components:{
        appHeader : Header,
        appAbout : About,
        appFooter : Footer
    }

}
</script>

<style>

</style>