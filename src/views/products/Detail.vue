<template>
  <div>
    <div id="page-wrap" v-if="product">
      <div id="img-wrap">
        <img :src="`http://localhost:5000${product.imageUrl}`" alt="" />
      </div>
      <div id="product-details">
        <h1>{{ product.name }}</h1>
        <h3 id="price">Rp{{ product.price }}</h3>
        <p>Average rating : {{ product.averageRating }}</p>
        <button id="add-to-cart" @click="addToCart(product.code)">Add to Cart</button>
        <p>{{ product.description }}</p>
      </div>
    </div>

    <!-- Tampilkan NotFound jika product tidak ditemukan -->
    <NotFound v-else />
  </div>
</template>

<script>
import axios from 'axios';
import NotFound from '../errors/404.vue'

export default {
  name: "DetailProductPage",
  components: {
    NotFound, // Daftarkan komponen di sini
  },
  data() {
    return {
      product : {},
    };
  },
  methods : {
    async addToCart(product) {
      const result = await axios.post('http://localhost:5000/api/orders/user/1/add', {
        product : product
      })

      if(result.status === 200) {
        alert("berhasil menambahkan")
      }
    }
  },
  async created() {
    const code = this.$route.params.id
    const result = await axios.get(`http://localhost:5000/api/products/${code}`)
    this.product = result.data;
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
