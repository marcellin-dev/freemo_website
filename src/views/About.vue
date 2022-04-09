<template>
    <div class="about">
        <div class="text-center">
<br>
            <div class="container ">
                  <p class="fw-bold font">Notre mission,</p>
             <div class="row">
                 <div class="col-12 col-md-6">
                     <img src="../assets/mission.png" alt="">
                 </div>
                 <div class="col-12 col-md-6  taille-texte">
                   
                         faire de l’Afrique le premier continent cashless du monde
Sur un continent où plus de la moitié de la population n’a pas de compte
bancaire, Freemo offre le premier réseau de services financiers sans frais de
gestion de compte, disponible instantanément et partout !
Nous construisons une infrastructure financière qui facilite le quotidien
Le succès du mobile money au Kenya a sorti près d’un million de personnes de
la pauvreté. Pourtant, plus de 10 ans plus tard, la plupart des Africains n’ont
toujours pas accès à des outils d’épargne, de transfert ou de crédit abordables qui
leur permettraient d’entreprendre et assurer les besoins de leurs familles.
Freemo apporte une solution au problème en utilisant la technologie pour bâtir
un réseau financier radicalement inclusif et extrêmement abordable.
                 </div>
             </div>
                
             <div class="row mt-5">
                 
                   <p class="fw-bold mt-4"> <img class="size" src="../assets/valeur.png" alt="">  <span class="font">Nos valeus,</span></p>
               <div class="col"></div>
                <div class="col-11 ">

                <div class="row back ">

              
                   <div class="col-12 col-md-5 mx-2 my-2  animValeur shadow" v-for="item in datas" :key="item.titre">
                        <CardValeur 
                        :infos="item"
                        />
                   </div>
                </div>
                   </div>

                   <!-- <div class="col"></div> -->
             </div>
            </div>
        </div> <br>
    </div>
</template>

<script>
import CardValeur from '../components/CardValeur.vue';
export default {
    data() {
        return {
            datas: [
        { id:1, titre: " Notre mission passe avant nos égos", description: "Nous n’oublions jamais ce \t pour quoi nous œuvrons — améliorer le quotidien de toutes les personnes qui touchent à nos produits. Les personnes qui utilisent Freemo pour travailler, envoyer de l’argent à leurs proches et mettre de côté ce qu’ils gagnent sont nos vrais patrons."},
      { id:2, titre: "Nous profitons de nos vies à fond — ", description: "Collectivement, nos clients sont notre priorité, mais individuellement nous prenons le temps de vivre pleinement. Que ce soit en adaptant nos horaires à notre vie personnelle, en nous déconnectant ou en prenant de longs congés lorsqu’on en a besoin."},
      { id:3, titre: "Nous sommes d’une franchise absolue", description: "Dans beaucoup d’entreprises, admettre ses erreurs est vu comme un signe de faiblesse, et avoir une communication franche en cas de difficulté est tabou. Chez Freemo, être honnête à propos de ses erreurs est considéré comme un signe de grandeur et donner des avis francs à ses collaborateurs, comme un signe de générosité."},
      { id:4, titre: " Nous maximisons nos capacités à apprendre", description: "Nous réajustons constamment nos objectifs et méthodes pour être plus efficaces et à l’aise dans notre travail. Et surtout, nous le faisons régulièrement. Plus vite nous nous remettons en question et nous améliorions, en tant que compagnie et en tant qu’individus, plus vite nous accomplirons notre mission."},
    
      ]
        }
    },
    components: {
        CardValeur
    }
}
</script>
<style scoped>

.back{
      /* background-image: url('../assets/back.jpeg'); */
}
.taille-texte{
    font-size: 12px
}
.titre{
    font-size: 16px;
}
.font{
    font-size: 20px
}
.size{
    height: 50px;
    width: 50px;
}


.animValeur{

    transition: 1s;
}
.animValeur:hover{

      transform: scale(1.02);
 
}
</style>