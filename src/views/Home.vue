<template>
  <div class="home">
    <heroSection />
    <products />
    <showcase
      backgroundImage="conversebg.png"
      title="Converse"
      subtitle="Explore styles tough enough to handle all your workouts"
      text= "Shop Brands"
    />
    <subscribe />

  </div>
</template>

<script>
import products from '../components/products';
import heroSection from '../components/heroSection';
import showcase from '../components/showcase'
import subscribe from '../components/subscribe'

export default {
  name: "home",
  components: {
    products,
    heroSection,
    showcase,
    subscribe
  }
  
};
</script>

<style>
.home {
  margin-top: 5rem;
}
</style>
