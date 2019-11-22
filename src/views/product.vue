<template>
  <div>
    <div class="wrapper">
      <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
          <img  class="img-responsive" :src="makeImagePath(product)" alt="">
        </div>
        <div class="col-lg-8 col-md-8 col-sm-6 col-xs-12">
          <h2>{{ product.name }}</h2>
          <p>Price: ${{ product.price }}</p>
          <p><em class="text-danger">{{ product.quantity }} </em>left in stock</p>
          <div class="btn btn-add" @click="addToCart">ADD TO CART</div>
        </div>
      </div>

      <!-- <div class="row">
         <h2 class="text-left">You may also like</h2>
        <section class="random-items">
          <router-link :to="{ name: 'product', params: { id: randomMen.id}}" class="random-items__item">
            <img class="product-image" :src="makeImagePath(randomMen)" alt="">
            <p class="product-title">{{ randomMen.name }}</p>
            <p><em>${{ randomMen.price }}</em></p>
          </router-link>

          <router-link :to="{ name: 'product', params: { id: randomWomen.id}}" class="random-items__item">
            <img class="product-image" :src="makeImagePath(randomWomen)" alt="">
            <p class="product-title">{{ randomWomen.name }}</p>
            <p><em>${{ randomWomen.price }}</em></p>
          </router-link>

          <router-link :to="{ name: 'product', params: { id: randomKids.id}}" class="random-items__item">
            <img class="product-image" :src="makeImagePath(randomKids)" alt="">
            <p class="product-title">{{ randomKids.name }}</p>
            <p><em>${{ randomKids.price }}</em></p>
          </router-link>
        </section>

        <button class="btn btn--grey" @click="recommendRandomOutfit">Shuffle</button>
      </div> -->

    </div>
  </div>
</template>

<script>
import { imagePath } from '@/mixins/imagePath.js'

export default {
  name: 'product',
  mixins: [imagePath],
  created() {
    this.recommendRandomOutfit();
  },
 
  data() {
    return {
      randomMenId: null,
      randomWomenId: null,
      randomKidsId: null,
      product: this.$store.getters.product(this.$route.params.id)
    }
  },

   computed: {
    randomMen() {
      return this.$store.getters.product(this.randomMenId)
    },
    randomWomen() {
      return this.$store.getters.product(this.randomWomenId)
    },
    randomKids() {
      return this.$store.getters.product(this.randomKidsId)
    }
  },

  methods: {
    addToCart() {
      this.$store.dispatch('addToCart', this.$route.params.id)
    },

    randomProductIdByCategory(category) {
    let allProductsInCategory = this.productsByCategory.filter(p =>  p.category === category);
    let randomIndex = Math.floor(Math.random() * allProductsInCategory.length);
    return allProductsInCategory[randomIndex].id;
  },

    recommendRandomOutfit() {
      this.randomMenId = this.randomProductIdByCategory('men');
      this.randomWomenId = this.randomProductIdByCategory('women');
      this.randomKidsId = this.randomProductIdByCategory('kids');
  }
  }
};

</script>

<style lang="scss">
.wrapper {
  margin: 80px 0;
  height: 50vh;
}

.btn-add {
  background: #F62F5E;
  border-radius: 2rem;
  color: #ffffff;
  cursor: pointer;
  font-weight: bold;
  transition: all .15s ease;
  &:hover, &:focus {
  background-color: #42b983;
  }
}

</style>