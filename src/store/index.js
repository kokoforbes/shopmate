import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [53363],
    products: [
      {
        name: "Men's Knitwear Offers",
        id: 53362,
        price: 15.99,
        quantity: 10,
        category: "men",
        image: "knitwear.png"
      },

      {
        name: "Men's Shirt Offers",
        id: 53363,
        price: 4.99,
        quantity: 18,
        category: "men",
        image: "shirtoffers.png"
      },

      {
        name: "New Look T-Shirt In Gradient Fade",
        id: 53364,
        price: 14.99,
        quantity: 8,
        category: "women",
        image: "gradientfade.png"
      },

      {
        name: "Novelty T-shirts",
        id: 53365,
        price: 4.99,
        quantity: 12,
        category: "kids",
        image: "novelty.png"
      },
      {
        name: "Various T-shirt",
        id: 53366,
        price: 14.99,
        quantity: 16,
        category: "kids",
        image: "various.png"
      },

      {
        name: "Pull&Bear Jumper In Textured Knit In Blue",
        id: 53367,
        price: 14.99,
        quantity: 4,
        category: "men",
        image: "Pull&Bear.png"
      },
      {
        name: "Harajuku T-Shirt",
        id: 53368,
        price: 14.99,
        quantity: 10,
        category: "women",
        image: "knitwear.png"
      },
      {
        name: "Men casual Lizard",
        id: 53369,
        price: 14.99,
        quantity: 5,
        category: "kids",
        image: "lizard.png"
      }
    ]
  },
  mutations: {
    addToCart(state, payload) {
      state.cart.push(Number(payload));
    },

    removeFromCart(state, payload) {
      let index = state.cart.indexOf(Number(payload));
      state.cart.splice(index, 1);
    },

    decrementProductInventory(state, payload) {
      let product = state.products.find(
        product => product.id === Number(payload)
      );
      product.quantity--;
    },

    incrementProductInventory(state, payload) {
      let product = state.products.find(
        product => product.id === Number(payload)
      );
      product.quantity++;
    }
  },
  actions: {
    addToCart({ commit }, payload) {
      commit("addToCart", payload);

      commit("decrementProductInventory", payload);
    },

    removeFromCart({ commit }, payload) {
      commit("removeFromCart", payload);
      commit("incrementProductInventory", payload);
    }
  },
  getters: {
    product: state => id => {
      return state.products.filter(p => p.id === Number(id))[0];
    },

    cartItems: state => {
      return state.cart.map(itemId =>
        state.products.find(product => product.id === itemId)
      );
    },
    productsByCategory: state => category => {
      return state.products.filter(p => p.category === category);
    }
  }
});
