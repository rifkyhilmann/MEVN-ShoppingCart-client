<template>
    <div 
        class="product-container"
    >
        <img :src="item.imageUrl" class="product-image" alt="">
        <div class="details-wrap">
            <h3>{{ item.name }}</h3>
            <h3>Rp{{ item.price }}</h3>
        </div>
        <button class="remove-button">Remove</button>
    </div>
</template>
  
<script>
  
  
export default {
    name: "ItemCart",
    props : {
        item : {
            type : Object,
            require : true
        }
    }
}
</script>
  
<style>
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
  