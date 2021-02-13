<template>
  <div>
    <ShopCategories :categories="categories"/>
  </div>
</template>

<script>

import { useStore } from 'vuex'
import { computed } from 'vue'
import ShopCategories from '@/components/ui/shop/ShopCategories'

export default {
  name: 'ShopList',
  components: { ShopCategories },
  setup () {
    const store = useStore()
    store.dispatch('shop/loadCategories')
    const categories = computed(() => store.getters['shop/categories'])

    return {
      categories
    }
  }
}
</script>
