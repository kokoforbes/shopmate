<template>
  <div class="subscribe">
    <p>SUBSCRIBE FOR SHOP NEWS, UPDATES AND SPECIAL OFFERS</p>
    <div>
      <i class="far fa-envelope fa-2x"></i>
      <input type="search" class="subscribe-input" placeholder="your e-mail here">
      <button id="sub" class="btn btn-sub">Subscribe</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'subscribe'
}
</script>

<style lang="scss" scoped>
.subscribe {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-height: 72px;
  background: #f7f7f7;
  color: #2E2E2E;
  margin: 0 15px;
  margin-top: 16px;
  input {
    height: 36px;
    padding-left: 40px;
    border-radius: 2rem;
    outline: none;
    border: none;
    min-width: 12em;
  }
  p {
    font-size: bold;
    font-weight: 600;
    color: #6C6C6C;
  }

  i {
    position: absolute;
  }
}

.btn-sub {
  background: #F62F5E;
  border-radius: 2rem;
  color: #ffffff;
  margin-left: 10px;
}
</style>
