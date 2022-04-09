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

.card-service{
 /* margin: auto */
 animation-name: anim;
 animation-duration: 3s;
}


.card-service{
  cursor: pointer;
  font-weight: bold;
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%) ;
  transition: 1s;
}

.card-service:hover{
  transform: scale(1.1);
   /* animation-duration: 3s; */
 
   /* color: white; */
   
   font-size: 18px;


}

@keyframes anim {
  from {
  margin-left: 100px;
  box-shadow: 1px 2px 3px 2px;
  
  }
  to {
  margin-left: 0px;
    box-shadow: 1px 2px 3px 2px;
  }
}


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