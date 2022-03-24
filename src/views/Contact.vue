<template>
  <div class="contact mt-5">
      <p class="mt-4"><h2>Envoyez nous un message via whatsapp ou par email</h2></p>
    <br><br>
    <div class="row container mt-5 mx-2">
      <div class="col-12 col-md-6 hover">
          <h2>
        <a href="https://wa.me/237695420401?text=Salut l'équipe FREEMO Besoin de vos services" target="_blank" rel="noopener noreferrer"> 
        Ecrivez nous directement sur whatsapp en cliquant ici <i class="fab fa-whatsapp"></i> 
        
         <p> <img class="size" src="../assets/whatsapp.png" alt=""></p>
         </a>
              </h2>
      </div>

      <div class="col-12 col-md-6">
        <h2>Ecrivez Nous</h2>
        <form @submit="onSubmit"> 
          <div class="row">
            <div class="col-12 col-md">
              <div class="mb-3">
                <!-- <label for="exampleInputPassword1" class="form-label"
                  >Nom</label
                > -->
                <input
                  type="text"
                  class="form-control"
                  placeholder="votre Nom"
                  id="exampleInputPassword1"
                  required
                />
              </div>
            </div>

            <div class="col-12 col-md">
              <div class="mb-3">
                <!-- <label for="exampleInputPassword1" class="form-label"
                  >Prenom</label
                > -->
                <input
                  type="text"
                  class="form-control"
                  placeholder="votre Prenom"
                  id="exampleInputPassword1"
                />
              </div>
            </div>
          </div>
          <div class="mb-3">
            <!-- <label for="exampleInputEmail1" class="form-label"
              >Adresse email</label
            > -->
            <input
              type="email"
              class="form-control"
              placeholder="votre Adesse Email"
              id="exampleInputEmail1"
              required
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <!-- <label for="exampleInputPassword1" class="form-label"
              >Message</label
            > -->
            <textarea class="form-control" required placeholder="Votre message ici" id="floatingTextarea"></textarea>
          </div>

          <button type="submit" class="btn btn-danger form-control">
            envoyer
          </button>
        </form>
      </div>
    </div> <br> <br>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },

  methods:{
    onSubmit(e){
      e.preventDefault();
      alert("bravo envoye")
    }
  }
}
</script>

<style scoped>
.size{
    height: 100px;
    width: 100px;
}
.hover{
    cursor: pointer;
}
a{
    text-decoration: none;
    color: black
}
</style>