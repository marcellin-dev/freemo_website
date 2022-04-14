<template>
    <div class="dev">

        <div class="container position">
            <h3>Ce site est en developpment si vous êtes unAdmin  veuillez entrer votre mot de passe</h3>

        <form @submit="envoyer">

            <input type="password" class="form form-control my-4" placeholder="Mot de passe" v-model="pass">

            <input type="submit" class="form form-control my-4" placeholder="Entrer">

            <h4 v-if="error" class="bg-danger "> votre mot de passe est incorrect  </h4>
        </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pass: '',
            error: false
        }
        
    },
    
    methods: {
        envoyer(e){
            e.preventDefault();

            if(this.pass === "freemoadmin" || this.pass === "marco"){
                this.$router.push({name: 'home'})
            }
            else { 
                this.error = true;
                setTimeout(() => {
                    this.error = false;
                }, 3000);
            }
        }
    }
}
</script>


<style scoped>


.position{
width: 50%;


}
</style>