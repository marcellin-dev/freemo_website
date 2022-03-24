<template>
    <div class="card-service ">
        <!-- <div class="card ">
      <div class="card-body"> 
          <span class="nombre"> <p>{{infos.id}}.</p> </span>
        <h5 class="card-title titre"> 
             {{infos.titre}} </h5>
        <p class="card-text texte"> {{infos.description}} </p>
       
      </div>
      </div> -->
        <span class="nombre"> <p>{{infos.id}}.</p> </span>
         <h5 class=" titre"> 
             {{infos.titre}} </h5>

              <p class=" texte"> {{infos.description}} </p>
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
            id: Number,
            titre: String,
            description: String
        }

    }
}
</script>

<style scoped>

.card-service{
    /* background-image: url('../assets/back.jpeg'); */
}


.card{

    border: none  ;
}

@media only screen and (min-width: 768px) {

    .nombre{
        font-size: 50px;
        font-weight: bold;
        color: red;
    }

    .titre{
    font-size: 25px;
    font-weight: bold;
}

.texte{
    
    font-size: 22px;
    
}
}

@media only screen and (max-width: 768px) {
    .nombre{
    font-size: 30px;
    font-weight: bold;
    color: red;
}

.titre{
    font-size: 14px;
    font-weight: bold;
}

.texte{
    
    font-size: 12px;
    
}
}
</style>