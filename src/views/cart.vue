<template>
  <div class="cart">
    <h1>Cart</h1>
    <div class="row">
      <div class="col-md-8">
        <ul class="cart__list">
          <li v-for="item in cartItems" :key="item.id" class="cart_item offset-2">
            <img :src="makeImagePath(item)" class="thumbnail" alt="">
            <div>
              <p>{{ item.name }}</p>
              <p>${{ item.price }}</p>
            </div>
            <button
              @click="removeFromCart(item.id)"
              class="btn btn_remove">
              Remove
            </button>   
          </li>
        </ul>
      </div>
      <div class="col-md-4">
        <section class="total-section">
          <ul class="total-section-list">
            <li class="total-section__item">
              <p class="total-section__item__label">{{ cartItemsCount }} items</p>
              <p>{{ itemsSubtotal }}</p>
            </li>
            <li class="total-section__item">
              <p class="total-section__item__label">Shipping</p>
              <select v-model="selectedShippingOption">
                <option disabled value="">Please select an option</option>
                <option
                  v-for="option in shippingOptionsArray"
                  :key="option.text"
                  :value="option.rate">
                  {{ option.text }} (${{ option.rate }})
                </option>
              </select>
           </li>
           <li class="total-section__item">
              <p class="total-section__item__label">Subtotal</p>
              <p>{{ subtotal }}</p>
            </li>
            <li class="total-section__item">
              <p class="total-section__item__label">Tax ({{salesTaxPercentage}})</p>
              <p>{{ salesTaxApplied }}</p>
            </li>
            <li class="total-section__item">
              <p class="total-section__item__label">Total</p>
              <p>{{ total }}</p>
            </li>
          </ul>
          <button
          :disabled="!this.selectedShippingOption"
          class="btn total-section__checkout-button">
            Check out
          </button>
        </section>
      </div>
    </div>
    
  </div>
</template>

<script>
import { imagePath } from '@/mixins/imagePath.js'

export default {
  name: 'cart',
  mixins: [imagePath],
  data() {
    return {
      salesTax: 0.06,
      selectedShippingOption: '',
      shippingOptionsArray: [
        {
          text: 'One day',
          rate: 20,
        },

        {
          text: 'Two days',
          rate: 15,
        },

        {
          text: 'Three to five days',
          rate: 10,
        },

        {
          text: 'One week or more',
          rate: 5,
        },
      ],
    };
  },

  computed: {
    cartItems() {
      return this.$store.getters.cartItems
    },
    cartItemsCount() {
      return this.cartItems.length;
    },
    itemsSubtotal() {
      return this.cartItems.reduce((total, item) => total + item.price, 0);
    },
    subtotal() {
      if (this.selectedShippingOption) {
        return (Number(this.itemsSubtotal) + Number(this.selectedShippingOption)).toFixed(2);
      }
      return '---';
    },
    salesTaxPercentage() {
      return `${this.salesTax * 100}%`;
    },
    salesTaxApplied() {
      if (this.selectedShippingOption) {
        return (this.subtotal * this.salesTax).toFixed(2);
      }
      return '---';
    },

    total() {
      if (this.selectedShippingOption) {
        return (Number(this.subtotal)
               + Number(this.salesTaxApplied)).toFixed(2) ;
      }
      return '---';
    },
  },
  methods: {

    removeFromCart(itemId) {
      this.$store.dispatch('removeFromCart', itemId)
    }

  }
}
</script>

<style lang="scss">
.cart {
  margin-top: 100px;
  height: 100vh;
}

.cart-list {
  width: 70%;
  @media only screen and (max-width: 832px) {
    width: 100%;
  }

}

.cart_item {
  list-style: none;
  border-bottom: 2px solid #2c3e50;
  display: flex;
  width: 70%;
  padding: 20px 0;
  div {
    display: flex;
    flex: 2;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
  
  
}

.btn_remove:hover, .btn_remove:focus {
  color: #F62F5E;
  cursor: pointer;
  }

.thumbnail {
  max-width: 80px;
  max-height: 100px;
  margin-top: .5rem;
}

.total-section {
  background: #FAFAFA;
  padding: 0 1rem 1rem;
  min-width: 33%;

}


.total-section-list {
  margin: 0;
}


.total-section__item {
  display: flex;
  justify-content: space-around;
  align-items: center;

}

.total-section__item__label {
  font-weight: bold;
  margin-right: 1rem;

}

.total-section__checkout-button {
  width: 80%;
  color: #ffffff;
  background: #2c3e50;
}

</style>
