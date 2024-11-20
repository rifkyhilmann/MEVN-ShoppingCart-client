<template>
  <div>
    <div id="page-wrap" v-if="product">
      <div id="img-wrap">
        <img :src="product.imageUrl" alt="" />
      </div>
      <div id="product-details">
        <h1>{{ product.name }}</h1>
        <h3 id="price">Rp{{ product.price }}</h3>
        <p>Average rating : {{ product.averageRating }}</p>
        <button id="add-to-cart">Add to Cart</button>
        <p>{{ product.description }}</p>
      </div>
    </div>

    <!-- Tampilkan NotFound jika product tidak ditemukan -->
    <NotFound v-else />
  </div>
</template>

<script>
import { products } from '../../data/data-seed'
import NotFound from '../errors/404.vue'

export default {
  name: "DetailProductPage",
  components: {
    NotFound, // Daftarkan komponen di sini
  },
  data() {
    return {
      products,
    };
  },
  computed: {
    product() {
      return this.products.find((p) => {
        // Pastikan tipe id cocok (number vs string)
        return String(p.id) === String(this.$route.params.id);
      });
    },
  },
  mounted() {
    console.log(this.product);
  },
};
</script>

<style>
#page-wrap {
  margin-top: 16px;
  padding: 16px;
  max-width: 600px;
}

#img-wrap {
  text-align: center;
}

img {
  width: 400px;
}

#product-details {
  padding: 16px;
  position: relative;
}

#add-to-cart {
  width: 100%;
}

#price {
  position: absolute;
  top: 24px;
  right: 16px;
}
</style>
