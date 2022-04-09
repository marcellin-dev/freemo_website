<template>
  <div class="home ">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
      
     
      
    
      <div class="container mt-5">
          <p class=" mt-5 titre" > {{titre}} </p>
      
      <div class="row  services mt-5">
        <div class="col-lg">

        </div>
        <div class="col-lg-7 col">
            <div class="row">
               <div class="col-12 col-md-6 col-sm-12 marge my-2  " v-for="(item, index) in chooseData" :key="index" @click="infos(index)">
          <!-- <CardService
            :infos="item"
           /> -->
           
           <div class="row   mx-1 box "  data-bs-toggle="modal" data-bs-target="#exampleModal" >

           <div class="col-4"><span ><img :src="item.logo" class="taille" alt=""></span></div>
             <div class="col">  <p class="mt-4"> {{item.title}} </p></div>
           </div>

        </div>
            </div>
        </div>
        <div class="col-lg">

        </div>
       
       
      </div>


      <div class="infosModal">


          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title fw-bold text-center" id="exampleModalLabel">  {{moreInfos.title}} </h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                 
                    <div class="mb-3">
                     
                     <div class="row">
                       <div class="col-12 col-md-4">
                         <img  class="imageModal" :src="moreInfos.logo" alt="">
                       </div>

                       <div class="col-12 col-md">
                          <label class="fw-bold alignTextModal"> {{moreInfos.description}} </label>
                       </div>
                     </div>
                  
                    <button  v-if="moreInfos.procedure" class="btn btn-procedure"> voire la procedure </button>
                     
                    </div>
                    <!-- <div class="mb-3">
                      <label for="message-text" class="col-form-label">  </label>
                     
                    </div> -->
                
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                  <!-- <button type="button" class="btn btn-primary">Send message</button> -->
                </div>
              </div>
            </div>
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

  computed: {

    Type(){
      return this.$route.params.type ;
    },

      chooseData(){
           
      
      if(this.Type === "quotidien"){
          this.displayData = this.serviceQuotidien;
          this.titre = "Services quotidien"
      } else if(this.Type === "payment"){
           this.displayData = this.servicePayment;
           this.titre = "Services de paiements"
      } else if(this.Type === "commercial"){
           this.displayData = this.serviceCommercial;
            this.titre = "Services commercials"
      }

      return this.displayData 
      }
  },

  mounted(){
       let type = this.$route.params.type ; 
      
      if(type === "quotidien"){
          this.displayData = this.serviceQuotidien;
          this.titre = "Services quotidien"
      } else if(type === "payment"){
           this.displayData = this.servicePayment;
           this.titre = "Services de paiements"
      }else if(type === "commercial"){
           this.displayData = this.serviceCommercial;
           this.titre = "Services commercials"
      }
  },


  data(){
    return {

        moreInfos: {title: '', description: ''},
        titre: '',
        displayData: [],
      serviceCommercial: [{logo: require('../assets/depot.png'), title: 'Ouvrir un point de vente Freemo-pay ', description: 'Vous voulez gagner de l\'argent grace à FREEMO ? il vous suffit d\'ouvrir un point de vente en suivant la procédure... ', procedure: true},
      {logo: require('../assets/transfert.png'), title: "Devenir Marchand chez Freemo-pay", description: 'Vous avez un business ou une activité quelconque ou vous recevez constament des paiement ? Vous pouvez recevoirs tout vos paiements via FREEMO gratuitement ', procedure: true},
      {logo: require('../assets/facture.png'), title: "Devenir partenaire Freemo-pay", description: 'Devenez un partenaire FREEMO et faisons la différence ensemble', procedure: true},
    
      ],

      serviceQuotidien: [
          {logo: require('../assets/transfert1.png'), title: 'transfert d\'argent', description: 'vous pouvez grace a votre compte FREEMO transferer de l\'argent a un proche n\importe ou dans le monde en un clic '},
          {logo: require('../assets/retrait.png') , title: 'retrait d\'argent', description: ' Retirer votre argent FREEMO dans nos différents points de retrait'},
          {logo: require('../assets/depot1.png') , title: 'depot d\'argent', description: ' Vous pouver faire un dépot dans votre compte FREEMO gratuitement et avoir acces a votre argent quand vous le souhaitez'},
          {logo:  require('../assets/express.png') , title: 'transfert express', description: ' Transferer de l\argent a votre entourage même a ceux qui n\'ont pas de compte FREEMO'},
          {logo: require('../assets/carte1.png')  , title: 'transfert sans phone avec la carte Freemo', description: 'même si vous n\'avez pas votre téléphone sur vous vous pouvez toujours faire vos transaction grace a votre carte FREEMO la carte est gratuite'},
          {logo: require('../assets/camtel.jpeg')  , title: 'achat de credit Camtel depuis votre compte Freemo', description: 'Achetez du credit Camtel a partir de votre compte FREEMO'},
          {logo: require('../assets/epargne1.png') , title: 'epargne d\'argent', description: ' Vous pouvez aussi épargner votre argent dans votre compte FREEMO pour réaliser vos projets futurs'}
      ],


      servicePayment: [
          {logo: require('../assets/facturepay.png') , title: 'paiement des factures', description: 'payez vos diférentes factures gratuitement avec FREEMO '},
          {logo: require('../assets/marchandpay.png') , title: 'paiement marchand ', description: 'ou que vous soyez payez un service gratuitement chez nos partenaire marchand'},
          // {logo: '', title: 'Achat de credit telephonique ', description: ''},
          
      ]
    }
  },

  methods: {
    infos(id){
      
      this.moreInfos = this.chooseData[id];

      console.log(this.moreInfos, "---", this.chooseData)
    }
  }
}
</script>
<style scoped>



.box{
  cursor: pointer;
  font-weight: bold;
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%) ;
  transition: 1s;
}

 .box:hover{
  transform: scale(1.2);
   /* animation-duration: 3s; */
   background-color: rgba(253, 0, 0, 0.761);
   color: white;
   
   font-size: 18px;


}



.btn-procedure:hover{
    transform: scale(1.2);
   /* animation-duration: 3s; */
   background-color: rgba(253, 0, 0, 0.761);
   color: white;
   
   
}

.imageModal{
  height: 200px;
  width: 150px;
}

.services{
  /* margin-top: 0%; */
 
}

.taille{
    height: 100px;
    width: 100px;
}


.image{
 /* margin: auto */
 animation-name: anim;
 animation-duration: 3s;
 /* animation-delay: 3s; */
  animation-iteration-count: infinite;
}

@keyframes anim {
  from {
 transform: rotateZ(0deg);
 transform: rotateX(0deg);
 transform: rotateY(0deg);
  box-shadow: 1px 2px 1px 2px ;
  
  }
  to {
    transform: rotateX(20deg);
    /* transform: rotateY(10deg);
    transform: rotateZ(-15deg); */
    box-shadow: 1px 2px 3px 2px;
  }
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
  /* background-image: url('../assets/test1.jpg'); */
  /* height: 500px; */
/* clip-path: polygon(0% 1.13%, 100% 1.13%, 100% 54.21%, 0% 54.21%); */
/* background-color: #000000; */
  /* width: 100%; */
}

.image{
  /* height: 300px; */
  margin-top: 30px;
  width: 95%
}
.texte{
  height: 40%;
}
h3{
  color: black;
  font-weight: bold;
  margin: auto;
  font-size: 25px;
}
h5{
  color: black;
  font-weight: bold;
  margin: auto;
  font-size: 16px;
}
.freemo{}

@media only screen and (min-width: 768px) {

  .alignTextModal{
  margin-top: 65px;
}
}
</style>