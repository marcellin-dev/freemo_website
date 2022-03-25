<template>
  <div class="home ">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
      
      <div class="row back ">
        
         <div class="col-lg-2"></div>

        <div class="col-12 col-md texte mt-5">
          <br>
         
          <h3><p>Accédez à l'univers des services financiers avec FREEMO-PAY</p></h3>

               <h5>
                  <p>* Déposez et retirez votre argent </p>
                <p>*  payez gratuitement vos factures</p>
                <p>* Transférez à 0%</p>
               </h5>
         
              

              <p><img class="size" src="../assets/google-play-badge.png" alt="" />
               <img class="size mx-4" src="../assets/app-store-badge.svg" alt="" /></p>
        </div>

        <div class="col-12 col-md ">
           <img class="shadow image " alt="Vue logo" src="../assets/freemo.jpg">
         
        </div>
        <div class="col-lg-2"></div>

      </div>
      
    
      <div class="container mt-5">
          <p class=" mt-5 titre" >FREE<span class="freemo text-danger">MO</span>-PAY c'est </p>
      
      <div class="row  services mt-5">
        <div class="col-lg">

        </div>
        <div class="col-lg-7 col">
            <div class="row">
               <div class="col-12 col-md-6 col-sm-12 marge my-2 " v-for="item in datas" :key="item.logo">
          <CardService
            :infos="item"
           />
        </div>
            </div>
        </div>
        <div class="col-lg">

        </div>
       
       
      </div>

      <div class="row mt-5">

        <p class="fw-bold">Startup soutenue par </p>
        <div class="col-12 col-sm">
            <img src="../assets/kmer.png" alt=" kmer tect">
        </div>
        <div class="col-12 col-sm">
           <img src="../assets/pma.png" alt="pma">
        </div>

        <div class="col-12 col-sm">
           <img src="../assets/dbs.png" alt=" dbs">
        </div>
      </div>
      </div>
      <br>
      
  </div>
</template>

<script>
// @ is an alias to /src
// import NavBar from '@/components/NavBar.vue'
import CardService from '../components/CardService.vue';

export default {
  name: 'HomeView',
  components: {
    CardService
  },
  data(){
    return {
      datas: [{logo: require('../assets/depot.png'), description: 'Un compte sans frais de dépôt '},
      {logo: require('../assets/transfert.png'), description: "Cout de retrait et de transfert minime"},
      {logo: require('../assets/facture.png'), description: "Le paiement de facture sans frais"},
      {logo: require('../assets/securite.png'), description: "Un système de sécurité aux standards internationaux"},
      // {logo: 'test logo', description: "faire des transferts express"},
      // {logo: 'test logo', description: "payez vos factures"}
      ]
    }
  }
}
</script>
<style scoped>
.services{
  /* margin-top: 0%; */
 
}

.titre{
  font-size: 30px;
  font-weight: bold;
  font-family: 'GT Walsheim Bold', sans-serif;
}
.size{
    width: 150px;
  height: 50px;
}
.back{
  background-image: url('../assets/test1.jpg');
  /* height: 500px; */
/* clip-path: polygon(0% 1.13%, 100% 1.13%, 100% 54.21%, 0% 54.21%); */
/* background-color: #000000; */
  /* width: 100%; */
}
.marge{
 /* margin: auto */
}

.image{
  height: 300px;
  margin-top: 30px;
  width: 50%
}
.texte{
  height: 40%;
}
h3{
  color: white;
  font-weight: bold;
  margin: auto;
  font-size: 25px;
}
h5{
  color: white;
  font-weight: bold;
  margin: auto;
  font-size: 16px;
}
.freemo{}
</style>