<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
      <router-link class="navbar-brand" to="/">SHOPMATE</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
      
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link" href="#">Home <span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'category', params: { category: 'women'}}" class="nav-link">Women</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'category', params: { category: 'men'}}" class="nav-link">Men</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'category', params: { category: 'kids'}}" class="nav-link">Kids</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'category', params: { category: 'shoes'}}" class="nav-link">Shoes</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'category', params: { category: 'brands'}}" class="nav-link">Brands</router-link>
          </li>
        </ul>
        <span class="form-inline my-2 my-lg-0">
          <i class="fas fa-search"></i>
          <input class="form-control mr-sm-3" type="search" placeholder="Search anything" aria-label="Search">
          <i class="fas fa-times"></i>
        </span>
        <router-link to="/cart" class="nav-link"><i class="fas fa-shopping-bag fa-2x"></i>
        <counter-badge :count="cartCount"></counter-badge>
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
import counterBadge from '../components/counterBadge';

export default {
  name: 'navbar',
  components: { counterBadge },
  computed: {
    cartCount() {
      return this.$store.state.cart.length
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  background: #2E2E2E;
  .navbar-brand {
    color: #F62F5E;
    font-weight: bold;
  }

  .nav-link {
    color: #FFFFFF;
    font-weight: bold;
    &.router-link-exact-active {
      color: #F62F5E;
    }
  }

  input {
    border-radius: 2rem;
  }
}

</style>

