<template>
  <div id="app">
    <NavBar />
  
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <router-view/>
    <Footer />
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




</style>
