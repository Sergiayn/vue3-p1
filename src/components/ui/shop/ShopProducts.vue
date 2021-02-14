<template>
  <ul
       v-if="products && products.length !== 0">
    <li class="product-card"
        v-for="product in products"
        :key="product">
      <div class="product-title">
        <router-link :to="{ name: 'shop-product', params: {id:product.id} }">
          {{product.title}}
        </router-link>
      </div>
      <router-link class="product-img"
         :to="{ name: 'shop-product', params: {id:product.id} }">
        <img :src="product.img"
             :alt="product.title">
      </router-link>
      <div class="product-price">
        {{currency(product.price)}}
      </div>
      <div class="product-controls">
        <button class="btn">Купить</button>
      </div>
    </li>
  </ul>
  <div class="block-empty"
    v-else>
    Продуктов нет
  </div>
</template>

<script>
import { currency } from '@/utils/currency'

export default {
  name: 'ShopProducts',
  props: {
    products: {
      type: Object,
      require: true
    }
  },
  setup () {
    return {
      currency
    }
  }
}
</script>

<style scoped>
.product-card {
  display: inline-block;
  height: 250px;
}
.product-img {
  margin: 10px auto;
}
.product-price {
  color: white;
  text-align: center;
}
</style>
