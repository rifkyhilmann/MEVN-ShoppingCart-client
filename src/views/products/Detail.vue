<template>
    <div>
      <div id="page-wrap">
        <div class="img">
          <img src="" alt="">
        </div>
        <div id="product-details">
            <h1>Dark Wallet</h1>
            <h3 id="price">Rp.123.000</h3>
            <p>Average rating : 5.0</p>
            <button id="add-to-cart">Add to Cart</button>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem omnis quos nam repudiandae neque provident debitis veritatis, reprehenderit doloremque culpa. Reiciendis illo illum nostrum nobis tenetur sequi tempora amet neque.
            </p>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name : "DetailProductPage",
}

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