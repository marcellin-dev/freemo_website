<template>
  <div
    id="carouselExampleControls"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div class="carousel-item" :class="active1 ? 'active' : ''">
        <img
          src="../assets/banner1-1.jpg"
          class="d-block w-100 slider-img"
          alt="..."
        />

        <div class="carousel-caption d-md-block">
          <!-- <h5 class="text-danger"><p>Déposez et retirez votre argent</p></h5> -->
        </div>
      </div>
      <div class="carousel-item" :class="active2 ? 'active' : ''">
        <img
          src="../assets/banner1-2.jpg"
          class="d-block w-100 slider-img"
          alt="..."
        />

        <div class="carousel-caption d-md-block">
          <!-- <h5 class="text-danger"><p>payez gratuitement vos factures</p></h5> -->
        </div>
      </div>
      <div class="carousel-item back" :class="active3 ? 'active' : ''">
        <img
          src="../assets/banner1-3.jpg"
          class="d-block w-100 slider-img"
          alt="..."
        />
        <div class="carousel-caption d-md-block">
          <!-- <h5 class="text-dark"><p>Transférez à 0%</p></h5> -->
        </div>
      </div>

      <div class="carousel-item back" :class="active4 ? 'active' : ''">
        <img
          src="../assets/banner1-4.jpg"
          class="d-block w-100 slider-img"
          alt="..."
        />
        <div class="carousel-caption d-md-block">
          <!-- <h5 class="text-dark"><p>Transférez à 0%</p></h5> -->
        </div>
      </div>

      <div class="carousel-item back" :class="active5 ? 'active' : ''">
        <img
          src="../assets/banner1-5.jpg"
          class="d-block w-100 slider-img"
          alt="..."
        />
        <div class="carousel-caption d-md-block">
          <!-- <h5 class="text-dark"><p>Transférez à 0%</p></h5> -->
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active1: true,
      active2: false,
      active3: false,
      active4: false,
      active5: false,
      count: 1,
    };
  },

  methods: {
    transition() {
      console.log(this.count);
      if (this.count > 5) this.count = 1;

      switch (this.count) {
        case 1:
          this.active1 = true;
          this.active2 = false;
          this.active3 = false;
          this.active4 = false;
          this.active5 = false;
          this.count++;
          break;

        case 2:
          this.active1 = false;
          this.active2 = true;
          this.active3 = false;
          this.active4 = false;
          this.active5 = false;
          this.count++;
          break;

        case 3:
          this.active1 = false;
          this.active2 = false;
          this.active3 = true;
          this.active4 = false;
          this.active5 = false;
          this.count++;
          break;

        case 4:
          this.active1 = false;
          this.active2 = false;
          this.active3 = false;
          this.active4 = true;
          this.active5 = false;
          this.count++;
          break;

        case 5:
          this.active1 = false;
          this.active2 = false;
          this.active3 = false;
          this.active4 = false;
          this.active5 = true;
          this.count++;
          break;

        default:
          break;
      }
    },

    hanleSlider() {
      setInterval(() => {
        this.transition();
      }, 2000);
    },
  },

  mounted() {
    this.hanleSlider();
  },
};
</script>
<style scoped>
.back {
  /* background-color:rgba(0, 0, 0, 0.371); */
}

.slider-img {
  /* height: 300px;
  width: 400px; */
}
</style>
