<template>
  <div class="container" id="about">
      <div class="image">
          <img src="../../images/author.jpg" alt="Author">
      </div>
      <div class="intro">
          <h2 class="title">Nasir Raza</h2>
          <p class="description">Myself Nasir Raza a professional web-app developer with an experience of more than 1 years and strong expertise in HTML, CSS, Javascript, Vue, js,. I have contributed to many open-source projects and still paying services to a multinational company. I will assure you the best quality work with 24/7 services, unlimited revisions, and amazing seasonal offers. For any query be easy to contact me</p>
      </div>
  </div>
</template>
<script>
export default {

}
</script>

<style lang="scss" scoped>
.container{
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 5rem 2rem;

    background-image: linear-gradient(235deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.85)), url('../../images/bg-about.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    @media only screen and (max-width: 550px) {
        flex-direction: column;
        padding: 5rem 1rem;
        padding-top: 3rem;

    }

    .image{
        width: 15rem;
        height: 15rem;
        border-radius: 50%;
        overflow: hidden;   
        img{
            width: 100%;
            opacity: .8;
            &:hover{
                opacity: 1;
            }
        }
    }
    .intro{
        width: 70%;
        .title{
            font-size: 3rem;
            font-weight: 400;
            color: rgba(255, 255, 255, 0.85);
        }
        .description{
            font-size: 1.4rem;
            line-height: 1.5;
            margin-top: 1.5rem;
            color: rgba(255, 255, 255, 0.6);
            @media only screen and (max-width: 550px) {
                text-align: justify;
            }
        }
        @media only screen and (max-width: 550px) {
            width: 100%;
        }
    }

}

</style>