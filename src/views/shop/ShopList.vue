<template>
  <div>
    <ShopCategories :categories="categories"/>
    <ShopProducts :products="products"/>
  </div>
</template>

<script>

import { useStore } from 'vuex'
import { computed, watch } from 'vue'
import ShopCategories from '@/components/shop/ShopCategories'
import ShopProducts from '@/components/shop/ShopProducts'

export default {
  name: 'ShopList',
  components: { ShopCategories, ShopProducts },
  setup () {
    const store = useStore()
    store.dispatch('shop/loadCategories')
    store.dispatch('shop/loadProducts')
    const categories = computed(() => store.getters['shop/categories'])
    const products = computed(() => store.getters['shop/products'])
    const currentCategoryId = computed(() => store.getters['shop/currentCategoryId'])

    watch(currentCategoryId, () => {
      store.dispatch('shop/loadProducts')
    })

    return {
      categories,
      products
    }
  }
}
</script>
