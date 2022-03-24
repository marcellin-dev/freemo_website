<template>
    <div class="footer mt-5">

        <div class="row">
            <div class="col-12 col-md-3">
                <img class="logo" src="../assets/logo.png" alt="" />
                <p class="desktop">© FREEMO Mobile Money</p>
            </div>

            <div class="col-12 col-md-3">
                
                <p><router-link :to="{name: 'home'}"> Home</router-link></p>
                <p><router-link :to="{name: 'about'}"> A propos</router-link></p>
                <p> <router-link :to="{name: 'contact'}"> Contact</router-link></p>

            </div>

            <div class="col-12 col-md-3">

               <p> Informations Légales</p>
               <p>Conditions Générales</p>
               <p>Responsible Disclosure</p>

            </div>

            <div class="col-12 col-md-3"> 
                <p><img class="size" src="../assets/google-play-badge.png" alt="" /></p>
               <p> <img class="size" src="../assets/app-store-badge.svg" alt="" /></p>
               <p class="mobile">© FREEMO Mobile Money</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.size{
    width: 150px;
  height: 50px;
}
.logo {
  width: 80px;
  height: 50px;
}
a{
    text-decoration: none;
    color: currentColor;
}
@media only screen and (min-width: 768px) {
    .mobile{
        display: none
    }
}

@media only screen and (max-width: 768px) {
    .desktop{
        display: none
    }
}
</style>