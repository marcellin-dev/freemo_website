<template>
  <div id="app">
    <NavBar v-if="display != 'devmode' " />
  
      <!-- <div class="spinner" id="spin">

       
    <div class="inline">
           <p class="spinner" id="spinner"><i class="fa fa-spinner fa-5x"></i></p>
    </div>
      </div> -->

    <router-view/>
    <Footer v-if="display != 'devmode' " />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';


export default {
  name: 'App',
  components: {
    NavBar,
    Footer,
   
  },

computed: {

  display(){
    return this.$route.name;
  }
},

  mounted(){

    window.onload = function() {
       let spin = document.getElementById('spin');
    spin.classList.add('hide');
        }
    
  }

  
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

  #spinner{  
           
            animation: spin 1s linear infinite;
            color:red;
        }
          
        @keyframes spin {
            100% {
                transform: rotate(360deg);
            }
        }
.inline{
    display: flex;
}
.spinner i{
    margin-top: 10px;
    margin-left: 50px;
}

.hide{
  display: none;
}

</style>
