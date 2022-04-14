<template>
  <div class="navbar1">
    <nav class="navbar navbar-expand-lg navbar-light bg-secondary">
      <div class="container-fluid row-lg">
        <div class="col-lg">
          <router-link class="navbar-brand" :to="{name: 'home'}">
            <img class="logo" src="../assets/logo.png" alt="" />
          </router-link>
        </div>
        <button
          class="navbar-toggler btn-nav"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"> </span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>

          <div class="me-auto">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link
                  class="nav-link"
                  aria-current="page"
                  :to="{ name: 'home' }"
                >
                  <span :class="active === 'home' ? 'activeClass' : ''"
                    >Home</span
                  >
                </router-link>
              </li>

                <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle"   href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Services
          </a>
          <ul class="dropdown-menu dropdown-menu-ligth size" aria-labelledby="navbarDarkDropdownMenuLink">
            <!-- <p class="text-center"> service quotidien</p> --> 
            <li>
            <router-link class="nav-link" :to="{ name: 'services', params: {type: 'quotidien'} }">
                  <span :class="activeParam === 'quotidien' ? 'activeClass' : ''"
                    > service quotidien
                  </span>
                </router-link>
            </li>
            <li>
            
               <router-link class="nav-link " :to="{ name: 'services', params: {type: 'payment'} }">
                  <span :class="activeParam === 'payment' ? 'activeClass' : ''" >
                    service de paiement 
                  </span>
                </router-link>

            </li>
            <li>
            
              <router-link class="nav-link" :to="{ name: 'services', params: {type: 'commercial'} }">
                  <span :class="activeParam === 'commercial' ? 'activeClass' : ''"
                    > service commercial <span class="line"></span
                  ></span>
                </router-link>

            </li>


            <!-- <p class="text-center"> service de paiement</p>
            <li><a class="dropdown-item " href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>

            <p class="text-center"> service commercial</p>
            <li><a class="dropdown-item " href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li> -->


          </ul>
            </li>

              <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'about' }">
                  <span :class="active === 'about' ? 'activeClass' : ''"
                    >A propos <span class="line"></span
                  ></span>
                </router-link>
              </li>

              <li class="nav-item">
                <router-link class="nav-link" :to="{ name: 'contact' }">
                  <span :class="active === 'contact' ? 'activeClass' : ''"
                    >Contact</span
                  >
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "navbar",

  computed: {
    active() {
      return this.$route.name;
    },

  activeParam() {
      return this.$route.params.type;
    },

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.activeClass {
  color: red;
  border-style: none;
}

.size{
  width: 200px;
}
.line {
  height: 15px;
  width: 10px;
  background-color: rgb(189, 41, 41);
}

.btn-nav {
  background-color: red;
}
.logo {
  width: 80px;
  height: 50px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
