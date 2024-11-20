<template>
  <div>
    <div id="page-wrap">
      <div class="grid-wrap">
        <ProductItem 
          v-for="product in products" 
          :key="product.id" 
          :product="product" 
        />
      </div>
    </div>
  </div>
</template>

<script>
import { products } from '../../data/data-seed';
import ProductItem from '@/components/ProductItem.vue';

export default {
  name: "ProductPage",
  components: { // Ubah 'component' menjadi 'components'
    ProductItem
  },

  data() {
    return {
      products
    };
  }
};
</script>

<style scoped>
  .grid-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 16px;
  }

  #page-wrap {
    margin: auto;
    max-width: 800px;
    min-height: 100vh;
  }
</style>
