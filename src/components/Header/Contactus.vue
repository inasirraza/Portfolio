<template>
<div class= "contact">
        <form class="form-detail">
            <h2>Contact us</h2>
            <label for="fullname">
                <strong>Full name</strong><br><input type="text" id="fullname" placeholder="e.g Nasir Raza">
            </label>
            <label for="email">
                <strong>Email</strong><br><input type="text" id="email" placeholder="e.g nasir@gmail.com">
            </label>
            <label for="subject">
                <strong>Subject</strong><br><input type="text" id="subject" placeholder="subject">
            </label>
            <label for="">
                <strong>Message</strong><br><textarea name="message" id="message" cols="20" rows="5" placeholder="Enter your message"></textarea>
            </label>
            <div class="buttons">
                <button class="cancel box-btn" @click.prevent="$emit('toggle')">Cancel</button>
                <button class="submit box-btn" @click.prevent="submitted">Submit</button>
            </div>
        </form>
</div>
</template>

<script>
export default {
    methods:{
        submitted(){
            alert('Your message has been recorded')
            this.$emit('toggle')
        }
    }

}
</script>


<style lang="scss" scoped>

$bp-large: 550px;
$bp-small: 400px;
$bp-smallest: 300px;
$primary-color: #1A374D;
$secondary-color: #406882;
$tertiary-color: #6998AB;

.contact{
    position: fixed;
    right: 0;
    top: 6rem; 
    z-index: 10000;
}
   

.form-detail{
    border-radius: 5px;
    font-size: 1.6rem;
    background-color: rgba(199, 199, 199, 0.8);  
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    display: flex;
    padding: 0 2rem;
    flex-direction: column;
    align-items: flex-start;
    transition: all .2s;
    @media only screen and (max-width: $bp-smallest) {
        padding: 0 1rem;
    }
    h2{
        text-align: center;
        font-size: 2.4rem;
        font-weight: 600;
        text-transform: capitalize;
        color: rgba(0, 0, 0, 0.6);
        padding: 2rem 0;    

        @media only screen and (max-width: $bp-large){
            font-size: 2rem;
        }
    }

    &>*{
        margin-bottom: 1rem;
    }
    strong{
        color: rgba(0, 0, 0, .7);
        @media only screen and (max-width: $bp-large){
            font-size: 1.5rem;
            font-weight: 500;
        }
    }
    
    input{
        width: 25rem;
        padding: 1rem;
        font-size: 1.4rem;
        border: none;
        outline: none;
        margin-top: 1rem;
        background-color: #fff;
        @media only screen and (max-width: $bp-large){
            font-size: 1.2rem;
        }
        @media only screen and (max-width: $bp-smallest) {
            width: 20rem;
            padding: .5rem;
        }
    }
    textarea{
        outline: none;
        border: none;
        margin-top: 1rem;
        padding: 1rem;
        font-size: 1.2rem;
        background-color: #fff;
    }
    .box-btn{
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    }
}
</style>