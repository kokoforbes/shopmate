<template>

  <section class="showcase" :style="{backgroundImage: showCaseImagePath()}">
    <h1 class="showcase-title text-left">{{ title }}</h1>
    <p class="showcase-subtitle text-left">{{ subtitle }}</p>
    <button class="btn btn-shop text-left">{{ text }}</button>
  </section>

</template>


<script>

export default {

  name: 'showcase',

  props: {
    backgroundImage: String,
    title: String,
    subtitle: String,
    text: String,
  },

  methods: {

    showCaseImagePath() {
      // return `url(${require(`../assets/img/products${this.backgroundImage}`)});`
      return `url(${require('../assets/img/products/conversebg.png')})`
  },

  },

};

</script>


<style lang="scss" scoped>

.showcase {

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  margin: 0 15px;
  color: #ffffff !important;
  display: flex;
  flex-direction: column;
  min-height: 240px;
  padding-top: 80px;
  padding-left: 70px;
  @media only screen and (min-width: 600px) and (max-width: 900px) {
    min-height: 120px;
  }

  @media only screen and (max-width: 599px) {
    min-height: 80px;
  }

}

.showcase-title {
  font-size: 3rem;
  margin: 0;
}

.showcase-subtitle {
  font-size: 1.3rem;
}

.btn-shop {
  background: #fff;
  color: #f62f5e;
  border-radius: 2rem;
  width: 130px;
  font-weight: 600;
  font-size: bold;
}

</style>
