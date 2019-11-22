<template>
  <div>
    <section class="container-fluid">
      <div class="row">
        <div class="col-md-4">

        </div>
        <div class="col-md-8">
          <ul class="featured-items">
            <li v-for="product in products" :key="product.id" class="featured-items__items col-md-4">
              <router-link :to="{ name: 'product', params: { id: product.id}}">
              <img :src="imagePath(product)" alt="product" class="product-image">
              <p class="product-title">{{ product.name }}</p>
              </router-link>
              <p class="product-price"><em>£{{product.price}}</em></p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  name: 'products',
  data() {
    return {
     
    }
    },
  computed: {
    products() {
      return this.$store.state.products
    }
  },
  methods: {
    imagePath(product){
      return require(`../assets/img/products/${product.image}`);
    }
  }
}
</script>

<style lang="scss" scoped>

  .featured-items {

  padding-left: 0;

  list-style: none;

  display: flex;
  flex-wrap: wrap;

  justify-content: space-between;

  @media only screen and (max-width: 832px) {

    flex-direction: column;

  }

}

.featured-items__item {
  background: #FFF;
  margin-bottom: 30px;
  position: relative;
  overflow: hidden;
  width: 33%;
  text-align: center;
  padding: 30px;
  transition: 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) transform;

  @media only screen and (max-width: 832px) {

    width: 100%;

  }

}

/*.featured-items__item:hover {
    transform: translateY(-40px);
}*/

.product-image {

  max-height: 200px;

}

.product-title {

  font-weight: bold;

}

.product-price {
  color: #F62F5E;
  font-weight: bold;
}
</style>
