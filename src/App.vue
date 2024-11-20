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
* {
    box-sizing: border-box;
    font-family: Arial;
  }

  #page-wrap {
    margin: auto;
    max-width: 800px;
    min-height: 100vh;
  }

  button {
    background-color: #41B883;
    border: none;
    border-radius: 8px;
    color: white;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    outline: 0;
    padding: 16px;
  }
</style>
