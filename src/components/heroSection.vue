<template>
  <div class="hero">
    <div class="jumbotron" :style="{backgroundImage: ImagePath()}">
      <div class="container">
        <h1 class="display-4 text-left">Men wear</h1>
        <div class="row">
          <div class="col-md-4">
            <li><a href="#!" class=" ">Accessories</a></li>
            <li><a href="#!" class=" ">ASOS Basic Tops</a></li>
            <li><a href="#!" class=" ">Bags</a></li>
            <li><a href="#!" class=" ">Caps & Hats</a></li>
            <li><a href="#!" class=" ">Gifts</a></li>
            <li><a href="#!" class=" ">Grooming</a></li>
          </div>
          <div class="col-md-4">
            <li><a href="#!" class=" ">Hoodies & Sweatshirts</a></li>
            <li><a href="#!" class=" ">Jackets & Coats</a></li>
            <li><a href="#!" class=" ">Jeans</a></li>
            <li><a href="#!" class=" ">Jewellery</a></li>
            <li><a href="#!" class=" ">Joggers</a></li>
            <li><a href="#!" class=" ">Jumpers & Cardigans</a></li>
          </div>
          <div class="col-md-4">
            <li><a href="#!" class=" ">Leather Jackets</a></li>
            <li><a href="#!" class=" ">Long Sleeve T-shirts</a></li>
            <li><a href="#!" class=" ">Loungewear</a></li>
            <li><a href="#!" class=" ">Oversized & Longline</a></li>
            <li><a href="#!" class=" ">Polo Shirts</a></li>
            <li><a href="#!" class=" ">Shirts</a></li>
          </div>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "heroSection",
  props: {

    backgroundImage: String,

  },

  methods: {

    ImagePath() {
      return `url(${require('../assets/img/products/herobg.png')})`
  },
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .jumbotron {
    background: #b6b6b6;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;

    div div div li{
    list-style: none;
    a{
      color: #F7F7F7;
      font-weight: bold;
      font-size: 16px;
    }
  }
  }
</style>
