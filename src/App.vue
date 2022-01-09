<template>
  <div id="app">
    <div class="row">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    components: {
    }
  }
</script>

<style>
  *,*::before,*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    font-family: 'Roboto', sans-serif;
    scroll-behavior: smooth;

  }
  @media only screen and (max-width: 600px) {
    html{
      font-size: 50%;
    }
  }
  body,.row{
    width: 100%;
    overflow-x: hidden;
    margin: 0 auto;
  }
.box-btn{
  padding: 1rem;
  font-size: 1.2rem;
  font-weight: 700;
  border-radius: 4px;
  border: none;
  outline: none;
  background-color: rgba(255, 255, 255, 0.8);
  color: #1A374D;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.4);
  transition: all .2s;
}
.box-btn:hover{
    cursor: pointer;
    transform: scale(1.04);
    background-color: #1A374D;
    color: #fff;
}

/* Circle */

.circle-btn{
    font-size: 2rem;
    padding: .8rem 1rem;
    border-radius: 50%;
    background-color: #fff;
    color: #1A374D;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
    border: none;
    outline: none;
    z-index: 1000;
    transition: all .3s;
}
.circle-btn:hover{
    cursor: pointer;
    transform: scale(1.03);
    color: #fff;
    background-color: #1A374D;
}
</style>