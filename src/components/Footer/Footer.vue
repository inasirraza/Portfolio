<template>
<div class="container">
  <button class="circle-btn" @click="goTop"><i class="fa fa-arrow-up"></i></button>
  <div class="footer">
    <div class="contact">
      <div class="location">
        <div class="icon"><i class="fa fa-map-marker"></i></div>
        <p class="location-detail">Reging Hussainabad Skardu,<br><b>Gilgit Baltistan</b></p>
      </div>
      <div class="phone">
        <div class="icon"><i class="fa fa-phone"></i></div>
        <p class="phone-number"><b>+92 312 7274543</b></p>
      </div>
      <div class="email">
        <div class="icon"><i class="fa fa-envelope"></i></div>
        <p class="email-address"><b>iinasirraza@gmail.com</b></p>
      </div>
    </div>

      <div class="about">
        <h3 class="title">About</h3>
        <p class="description">This website is about the all projects that I have done, So that you can visit my all projects</p>
        <div class="social">
          <a href="https://www.facebook.com/nasirraza727" target="_blank"><img class="social-icon" src="../../images/fb.png" alt="Social icon"></a>
          <a href="https://www.instagram.com/inasir.raza/" target="_blank"><img class="social-icon" src="../../images/instagram.png" alt="Social icon"></a>
          <a href="https://github.com/inasirraza" target="_blank"><img class="social-icon" src="../../images/github.png" alt="Social icon"></a>
          <a href="https://www.linkedin.com/in/nasir-raza-3b4485208/" target="_blank"><img class="social-icon" src="../../images/linkedin.png" alt="Social icon"></a>
        </div>
      </div>
</div>

  <div class="copy">
    <hr>
    <p class="text">Copyright &copy; 2022 | Nasir Creations</p>
  </div>
</div>
</template>

<script>
export default {
  methods:{
    goTop(){
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style lang="scss" scoped>
.container{
$primary-color: #1A374D;
$secondary-color: #406882;
$tertiary-color: #6998AB;

width: 100%;
background-color: $primary-color;
padding: 2rem;
padding-top: 4rem;
position: relative;
.circle-btn{
  margin-left: 50%;
  transform: translateX(-100%);
  position: absolute;
  top: -4rem;
  opacity: .7;


}
  .footer{    
    width: 100%;
    display: flex;
    justify-content: space-around;

    @media only screen and (max-width: 600px) {
      flex-direction: column;    
    }
  
    
    .contact{
      max-width: 40%;
       @media only screen and (max-width: 600px) {
          max-width: 100%;
      }
      .icon{
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        font-size: 1.6rem;
        padding: 3px;
        margin-right: 1.5rem;
        color: #fff;
        background-color: $secondary-color;        
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all .2s;
        @media only screen and (max-width: 600px) {
          width: 3.5rem;
          height: 3.5rem;
          font-size: 2.2rem;
        }

        &:hover{
          cursor: pointer;
          color: $secondary-color;
          background-color: #fff;
          transform: scale(1.02);
        }
  
      }
      .location,
      .phone,
      .email{
        display: flex;
        align-items: center;
        margin-bottom: 2rem;
      }
      .location-detail,
      .phone-number,
      .email-address{
        font-size: 1.3rem;
        letter-spacing: 1px;
        line-height: 1.4;
        color: rgba(255, 255, 255, 0.8);
        @media only screen and (max-width: 600px) {
          font-size: 1.6rem;
        }
      }  
    }
    .about{
      max-width: 40%;
      @media only screen and (max-width: 600px) {
          max-width: 100%;
      }
      .title{
        font-size: 1.8rem;
        color: rgba(255, 255, 255, 0.9);
        margin-bottom: 1.5rem;
        @media only screen and (max-width: 600px) {
          font-size: 2rem;
        }
      }
      .description{
        font-size: 1.1rem;
        letter-spacing: 1px;
        line-height: 1.4;
        color: rgba(255, 255, 255, 0.75);
        @media only screen and (max-width: 600px) {
          font-size: 1.4rem;
          text-align: justify;
        }
      }
      .social{
        margin-top: 2rem;
        align-self: flex-end;
        &-icon{
          margin-right: 1.5rem;
          width: 3rem;
          height: 3rem;
        }
      }
    }
  }
  .copy{
    hr{
      border-top: 1px solid rgba(0, 0, 0, 0.493);
      opacity: .3;
      margin: 1rem auto;
    }
    .text{
      font-size: 1.1rem;
      letter-spacing: 1.5px;
      text-align: center;
      color: rgba(255, 255, 255, 0.6);
    }
  }

}
</style>