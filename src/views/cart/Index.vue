<template>
  <div>
    <div id="page-wrap">
        <h1>Shopping Cart</h1>
        <ItemCart 
          v-for="items in cartItems"
          :key="items.id"
          :item="items"
        />
        <h3 id="total-price">Total : {{ totalPrice }}</h3>
        <button id="checkout-button">Checkout</button>
    </div>
  </div>
</template>

<script>
import ItemCart from '@/components/ItemCart.vue';
import { cartItems } from '../../data/data-seed'

export default {
  name: "CartPage",
  components : {
    ItemCart,
  },  
  data () {
    return {
      cartItems: cartItems // Make sure to return an object
    }
  },
  computed: {
    totalPrice() {
      return this.cartItems.reduce(
        (sum, item) => sum + Number(item.price),
        0
      )
    }
  }
}
</script>

<style>
h1 {
  border-bottom: 1px solid #41B883;
  margin: 0;
  margin-top: 16px;
  padding: 16px;
}
#total-price {
  padding: 16px;
  text-align: right;
}
#checkout-button {
  width: 100%;
}
.product-container {
  align-content: 'center';
  border-bottom: 1px solid #ddd;
  display: flex;
  padding: 16px;
  width: 100%;
}
.product-image {
  flex: 1;
  height: 100px;
  max-width: 100px;
}
.details-wrap {
  padding: 0 16px;
  flex: 3;
}
.remove-button {
  flex: 1;
  margin: auto;
}
</style>
