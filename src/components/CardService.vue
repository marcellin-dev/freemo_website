<template>
    <div class="card-service">
        <div class="card shadow">
      <div class="card-body">
        <h5 class="card-title"> <img class="image" :src="infos.logo" :alt="infos.logo"> </h5>
        <p class="card-text texte"> {{infos.description}} </p>
       
      </div>
      </div>
    </div>
</template>

<script>
export default {
    data() {
        return{
            
        }
    },

    props: {
        infos:{
            logo: String,
            description: String
        }

    }
}
</script>

<style scoped>

.texte{
    font-weight: bold;
    font-size: 20px

}
.image{
    height: 50px;
    width: 50px;
}
.card{

    border: none  ;
}
</style>