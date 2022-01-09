<template>
  <div class="card">
      <div class="image"></div>
      <div class="intro">
          <h3 class="intro-title">{{project.title}}</h3>
          <p class="intro-description">{{project.description}}</p>
      </div>
        <a class="box-btn" :href="project.link" target="blank">Demo</a>
  </div>
</template>

<script>

export default {
    props: ['project']

}
</script>

<style lang="scss" scoped>
$primary-color: #1A374D;
$secondary-color: #406882;
$tertiary-color: #6998AB;
.card{
    margin: 2rem;
    width: 30rem;
    min-height: 25rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: rgba(255, 255, 255, 0.7);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    border-radius: 0 15px 0 15px ;
    overflow: hidden;
    padding-bottom: 5rem;

    position: relative;
    transition: all .2s;

    @media only screen and (max-width: 500px) {
        width: 20rem;
    }
    @media only screen and (max-width: 430px) {
        width: 100%;
        margin: 1.5rem 0;
        border-radius: 0;
        min-height: 30rem;
    }

    &:hover{
        transform: scale(1.05);

    }
    .image{
        height: 15rem;
        width: 100%;
        margin-bottom: 1rem;   
        background-image: url('../../../images/post.jpg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
    .intro{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;

        &-title{
            font-size: 1.6rem;
            font-weight: 600;
            padding: .5rem;
            color: rgba(0, 0, 0, 0.9);
            @media only screen and (max-width: 430px) {
                padding-left: 2rem;
                font-size: 1.8rem;
            }
        }
        &-description{
            font-size: 1.2rem;
            letter-spacing: 1px;
            line-height: 1.2;
            padding: .5rem;
            color: rgba(0, 0, 0, 0.7);
            @media only screen and (max-width: 430px) {
                padding-left: 2rem;
                font-size: 1.4rem;
            }
        }

    }
    a, .box-btn{
        text-decoration: none;
        padding: .5rem 1rem;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

        position: absolute;
        left: 1rem;
        bottom: 1rem;
        @media only screen and (max-width: 430px) {
            left: 2.5rem;
            font-size: 1.6rem;
        }

    }
}
</style>