<template>
    <div id="nav-bar">
        <router-link :to="{ name: 'Product' }" id="products-link">
            <h1>Vuestore</h1>
        </router-link> 
        <router-link :to="{ name: 'Cart' }" id="cart-link">
            <button>Cart</button>
        </router-link> 
    </div>
</template>

<script>
export default {
    name: "NavbarComponent",
}
</script>

<style scoped>
  #nav-bar {
    display: flex; /* Using flexbox */
    justify-content: space-between; /* Distributes space between left and right */
    align-items: center; /* Centers content vertically */
    border-bottom: 1px solid #ddd;
    height: 75px;
    width: 100%;
    padding: 0 16px; /* Optional: Add some padding for spacing */
  }

  #products-link h1 {
      margin: 0;
      font-size: 29px;
      color: #41B883;
      text-decoration: none;
      border: none;
  }
  #products-link {
      text-decoration: none;
  }

  #cart-link button {
      padding: 8px 16px;
      font-size: 16px;
      cursor: pointer;
  }
</style>
