<template>
  <footer class="page-footer stylish-color-dark pt-4">

    <!-- Footer Links -->
    <div class="container text-center text-md-left">
  
      <!-- Grid row -->
      <div class="row">
        <ul class="list-unstyled list-inline text-center mx-auto">
          <li class="list-inline-item">
            <a href="#!" class=" ">Women</a>
          </li>
          <li class="list-inline-item">
            <a href="#!" class="">Men</a>
          </li>
          <li class="list-inline-item">
            <a href="#!" class="">Kids</a>
          </li>
          <li class="list-inline-item">
            <a href="#!" class="">Shoes</a>
          </li>
          <li class="list-inline-item">
            <a href="#!" class="">Brands</a>
          </li>
        </ul>
      </div>
      <!-- Grid row -->

    <!-- Social buttons -->
    <ul class="list-unstyled list-inline text-center">
      <li class="list-inline-item">
        <a class="btn-floating btn-dribble mx-1">
          <i class="fab fa-instagram fa-2x"> </i>
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn-floating btn-dribbble mx-1">
          <i class="fab fa-pinterest fa-2x"> </i>
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn-floating btn-tw mx-1">
          <i class="fab fa-twitter fa-2x"> </i>
        </a>
      </li>
      <li class="list-inline-item">
        <a class="btn-floating btn-fb mx-1">
          <i class="fab fa-facebook fa-2x"> </i>
        </a>
      </li>
    </ul>
    <!-- Social buttons -->
  
    <!-- Copyright -->
    <div class="footer-copyright text-center py-3">© 2016 Shopmate Ltd . Contact . 
      <a href="#"> Privacy Policy</a>
    </div>
    <!-- Copyright -->
    </div>
  </footer>
</template>

<script>
export default {
  name: 'navBottom'
}
</script>

<style lang="scss" scoped>
  .page-footer {
  min-height: 300px;
  background: #2E2E2E;
  color: #F7F7F7;
  
  ul {
    li{
      margin-top: 10px;
      padding: 20px;
      a {
        color: #F7F7F7;
        padding: 10px;
      }
    }
  }
}
</style>
