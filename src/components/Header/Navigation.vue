<template>
<div>
    <div class="nav">
        <div class="logo">
            <img src="../../images/logo.png" alt="Logo" class="logo-img"> 
            <p class="logo-text">Web Muzeum</p>
        </div>
        <button class="box-btn" @click="$router.push('/#about')">About Author</button>
    </div>
    
</div>
  
</template>

<script>

export default {

}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@600&display=swap');
$primary-color: #1A374D;

.nav{
    width: 100%;
    background-color: $primary-color;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 3rem;
    position: fixed;
    left: 0 ;
    top: 0;
    z-index: 1000;

    .logo{
        display: flex;
        justify-content: center;
        align-items: center;
        &-img{
            width: 3rem;
            margin-right: 1.5rem;
        }
        &-text{
            font-size: 1.6rem;
            font-family: 'Comfortaa', cursive;
            color: #fff;

        }
    }
}
</style>