<template>
    <div class="container">
        <h1 class="heading">{{text}}</h1>
    </div>
</template>

<script>
export default {
    data(){
        return{
            maintext: '“Everything you can imagine is real.”― Pablo',
            text: '' 
        }
    },
    methods:{
        animation(){
            let textCopy = '“Everything you can imagine is real.”― Pablo'
            setInterval(()=>{
                if(textCopy.length<1){
                    textCopy = this.maintext
                    this.text = ''
                }
                let arr = textCopy.split('')
                this.text += arr.shift()
                textCopy = arr.join('')

            },150)
        }
    },
    created(){
        this.animation()
    }

}
</script>

<style lang="scss" scoped>
.container{
    width: 100%;
    min-height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
    
    background-image:linear-gradient(257deg, rgba(75,75,75,0.6), rgba(0,0,0,0.8)), url('../../images/hero.jpg');
    background-position: bottom;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;

    .heading{
        font-size: 3rem;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 1.5px;
        color: rgba(255, 255, 255, 0.9);
        padding-left: 1rem;
        border-right: 1px solid grey;

        @media only screen and (max-width: 600px) {
            font-size: 2.4rem;
            margin-right: 3rem;
            border-right: none;

        }
        
    }

}

</style>