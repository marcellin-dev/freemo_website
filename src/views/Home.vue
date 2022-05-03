<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->

    <div class="row back">
      <!-- <div class="col-lg-2"></div> -->

      <div class="col-12 col-md-10 texte mt-5">
        <br />

        <h3 class="font">
          <p>Accédez à l'univers des services financiers avec FREEMO-PAY</p>
          <span class="mobile">
            <Slider />
          </span>
        </h3>

        <h5>
          <!-- <p> Déposez et retirez votre argent </p>
                <p> payez gratuitement vos factures</p>
                <p> Transférez à 0%</p> -->
        </h5>

        <p>
          <img class="size" src="../assets/google-play-badge.png" alt="" />
          <img class="size mx-4" src="../assets/app-store-badge.svg" alt="" />
        </p>
      </div>

      <div class="col col-md">
        <!-- <img class="image  " alt="Vue logo" src="../assets/test2.jpeg"> -->

        <span class="image">
          <!-- <Slider /> -->
          <img
            src="../assets/test2.png"
            class="d-block w-100 animation"
            alt="..."
          />
        </span>
      </div>
      <!-- <div class="col-lg-2"></div> -->
      <span class="desktop">
        <Slider />
      </span>
    </div>

    <div class="container mt-5">
      <p class="mt-5 titre">
        FREE<span class="freemo text-danger">MO</span>-PAY c'est
      </p>

      <div class="row services mt-5">
        <div class="col-lg"></div>
        <div class="col-lg-7 col">
          <div class="row">
            <div
              class="col-12 col-md-6 col-sm-12 marge my-2"
              v-for="item in datas"
              :key="item.logo"
            >
              <CardService :infos="item" />
            </div>
          </div>
        </div>
        <div class="col-lg"></div>
      </div>
      <br />
      <br />
      <div class="row mt-5">
        <p class="fw-bold">Startup soutenue par</p>
        <div class="col-12 col-sm">
          <img src="../assets/kmer.png" class="soutenu" alt=" kmer tect" />
        </div>
        <div class="col-12 col-sm">
          <img src="../assets/pma.png" class="soutenu" alt="pma" />
        </div>
      </div>
    </div>
    <br />
  </div>
</template>

<script>
// @ is an alias to /src
// import NavBar from '@/components/NavBar.vue'
import CardService from "../components/CardService.vue";
import Slider from "../components/Slider.vue";

export default {
  name: "HomeView",
  components: {
    CardService,
    Slider,
  },
  data() {
    return {
      datas: [
        {
          logo: require("../assets/depot.png"),
          description: "Un compte sans frais de dépôt ",
        },
        {
          logo: require("../assets/transfert.png"),
          description: "Cout de retrait et de transfert minime",
        },
        {
          logo: require("../assets/facture.png"),
          description: "Le paiement de facture sans frais",
        },
        {
          logo: require("../assets/securite.png"),
          description: "Un système de sécurité aux standards internationaux",
        },
        // {logo: 'test logo', description: "faire des transferts express"},
        // {logo: 'test logo', description: "payez vos factures"}
      ],
    };
  },
};
</script>
<style scoped>
.services {
  /* margin-top: 0%; */
}

.soutenu {
  width: 200px;
  height: 100px;
}
.image {
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
    box-shadow: 1px 2px 1px 2px;
  }
  to {
    transform: rotateX(20deg);
    /* transform: rotateY(10deg);
    transform: rotateZ(-15deg); */
    box-shadow: 1px 2px 3px 2px;
  }
}

.titre {
  font-size: 30px;
  font-weight: bold;
  font-family: "GT Walsheim Bold", sans-serif;
}

.font {
  font-famlly: "Blippo, fantasy";
}

.size {
  width: 150px;
  height: 50px;
}
.back {
  /* background-image: url('../assets/test1.jpg'); */
  /* height: 500px; */
  /* clip-path: polygon(0% 1.13%, 100% 1.13%, 100% 54.21%, 0% 54.21%); */
  /* background-color: #000000; */
  /* width: 100%; */
}

.image {
  /* height: 300px; */
  margin-top: 30px;
  width: 95%;
}
.texte {
  height: 40%;
}
h3 {
  color: black;
  font-weight: bold;
  margin: auto;
  font-size: 25px;
}
h5 {
  color: black;
  font-weight: bold;
  margin: auto;
  font-size: 16px;
}
.freemo {
}

.anim {
  transform: translateX(10);
  transform: rotate(30deg);
  animation-iteration-count: infinite;
}

.anim1 {
  transform: translateY(10);
  transform: rotate(-30deg);
  animation-iteration-count: infinite;
}

.animation {
  /* 
   animation-name: move;
   animation-iteration-count: infinite; */
  animation: move 5s infinite;
  transition: all 0.4s ease-in-out;
  /* box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 30%) ; */
}

@keyframes move {
  0% {
    transform: translateY(0) rotate(0) scale(1) translateX(0);
  }

  50% {
    transform: translateY(-10px) rotate(10deg) scale(1.05) translateX(10px);
  }

  100% {
    transform: translateY(0) rotate(0) scale(1) translateX(0);
  }
}

@media only screen and (max-width: 768px) {
  .desktop {
    display: none;
  }
}

@media only screen and (min-width: 768px) {
  .mobile {
    display: none;
  }
}
</style>
