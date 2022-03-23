<template>
  <div class="home ">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
      
      <div class="row back ">
        

        <div class="col-12 col-md-7 texte">
          <br>
          <h3>Depuis votre application Freemo, accédez à l'univers des services Freemo Pay</h3>
          <br>
          <h5>
            <p>Déposez et retirez de l'argent</p>
              <p>Transférez de l'argent</p>
              payez vos factures
              <p>Payez des produits et services sans vous souciez des problèmes de monnaies</p>
              
              Transférez de l'argent de votre compte FREEMO-PAY  vers un correspondant ayant ou pas l'application
              <p>Transférez de l'argent entre votre compte bancaire et votre comte Freemo Pay</p>
              
              Payez vos assurances
              <p>Payez vos achats en ligne avec votre compte Fremo Pay</p>
              </h5>

              <p><img class="size" src="../assets/google-play-badge.png" alt="" />
               <img class="size mx-4" src="../assets/app-store-badge.svg" alt="" /></p>
        </div>

        <div class="col-12 col-md ">
           <img class="shadow image " alt="Vue logo" src="../assets/freemo.jpg">
         
        </div>

      </div>
      
    
      <div class="container ">
          <p class="shadow mt-4">Depuis votre application Freemo, accédez à l'univers des services Freemo Pay</p>
      
      <div class="row  services mt-5">
      
        <div class="col-12 col-md-6 col-sm-6 marge my-2 " v-for="item in datas" :key="item.logo">
          <CardService
            :infos="item"
           />
        </div>
       
      </div>

      <div class="row mt-5">

        <p class="fw-bold">Startup soutenue par </p>
        <div class="col">
            <img src="../assets/kmer.png" alt=" kmer tect">
        </div>
        <div class="col">
           <img src="../assets/pma.png" alt="pma">
        </div>

        <div class="col">
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

.size{
    width: 150px;
  height: 50px;
}
.back{
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
}
.texte{
  height: 40%;
}
h3{
  color: black;
  font-weight: bold;
  margin: auto;
}
h5{
  color: black;
  font-weight: bold;
  margin: auto;
}
</style>