<template>
  <ul class="nav">
      <router-link to="/" tag="li" active-class="active" class="item item1" exact>Vue.js</router-link>
      <router-link to="/main/categories/javascript-projects" tag="li" active-class="active" class="item item2" exact>Javascript</router-link>
      <router-link to="/main/categories/htmlcss-projects" tag="li" active-class="active" class="item item3" exact>HTML-CSS</router-link>
  </ul>
</template>

<script>
export default {

}
</script>


<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@600;700&display=swap');
$primary-color: #1A374D;
$secondary-color: #406882;
$tertiary-color: #6998AB;

.nav{
    font-family: 'Roboto Mono', monospace;

    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    overflow-y: hidden;
    width: 100%;
    background-color:$secondary-color;
    .item{
        text-transform: uppercase;
        width: max-content;
        font-size: 2rem;
        font-weight: 700;
        letter-spacing: 1px;
        padding: 1rem 0;
        color: rgba(255, 255, 255, 0.6);
        transform: scale(.8);
        transition: all .2s;

        @media only screen and (max-width: 600px) {
            font-size: 1.8rem;
        }


        &.router-link-exact-active, &:hover{
            cursor: pointer;
            color: #fff;
            transform: scale(1.1);         
        }
    }
    .item1{
        &.router-link-exact-active, &:hover{
            color: rgb(97, 255, 140);
        }
    }
    .item2{
        &.router-link-exact-active, &:hover{
            color: #F6D860;
        }
    }
    .item3{
        &.router-link-exact-active, &:hover{
            color: #ff4949;
        }
    }


}

</style>