<template>
  <div id="app">
    <nav>
      <router-link :to="{ name : 'Product' }">Home</router-link> |
      <router-link :to="{ name : 'ProductDetail', params : { id : 123 } }">Product Detail</router-link> |
      <router-link :to="{ name : 'Cart' }">Cart</router-link> |
    </nav>
    <router-view/>
  </div>
</template>

<style>

</style>
