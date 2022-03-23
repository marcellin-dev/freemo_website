<template>
    <div class="card-service">
        <div class="card shadow">
      <div class="card-body">
        <h5 class="card-title titre"> {{infos.titre}} </h5>
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
            titre: String,
            description: String
        }

    }
}
</script>

<style scoped>
.titre{
    font-size: 16px;
}

.texte{
    font-weight: bold;
    font-size: 14px;
    
}

.card{

    border: none  ;
}
</style>