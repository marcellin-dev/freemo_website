<template>
  <div class="contact">
      <p class="mt-4"><h2>Envoyez nous un message via whatsapp ou par email</h2></p>
    <div class="row container mt-4">
      <div class="col-12 col-md hover">
          <h2>
        <a href="https://wa.me/237695420401?text=Salut l'équipe FREEMO Besoin de vos services" target="_blank" rel="noopener noreferrer"> 
        Ecrivez nous directement sur whatsapp en cliquant ici <i class="fab fa-whatsapp"></i> 
        
         <p> <img class="size" src="../assets/whatsapp.png" alt=""></p>
         </a>
              </h2>
      </div>

      <div class="col-12 col-md">
        <h2>Ecrivez Nous</h2>
        <form>
          <div class="row">
            <div class="col-12 col-md">
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label"
                  >Nom</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
            </div>

            <div class="col-12 col-md">
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label"
                  >Prenom</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"
              >Adresse email</label
            >
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"
              >Message</label
            >
            <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
          </div>

          <button type="submit" class="btn btn-danger form-control">
            envoyer
          </button>
        </form>
      </div>
    </div> <br> <br>
  </div>
</template>

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