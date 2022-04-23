<template>


    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active ">
      <img src="../assets/test2.jpeg" class="d-block w-100 slider-img" alt="...">
      

      <div class="carousel-caption d-md-block">
        <h5 class="text-danger">  <p> Déposez et retirez votre argent </p></h5>
      
      </div>
    </div>
    <div class="carousel-item">
      <img src="../assets/epargne.png" class="d-block w-100 slider-img" alt="...">

       <div class="carousel-caption d-md-block">
        <h5 class="text-danger">  <p> payez gratuitement vos factures</p> </h5>
      
      </div>
    </div>
    <div class="carousel-item back">
      <img src="../assets/securite.png" class="d-block w-100 slider-img" alt="...">
       <div class="carousel-caption  d-md-block">
        <h5 class="text-dark"> <p> Transférez à 0%</p> </h5>
       
      
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</template>

<style scoped>
.back{
    /* background-color:rgba(0, 0, 0, 0.371); */
}

.slider-img{
  height: 300px;
  width: 400px;
}
</style>