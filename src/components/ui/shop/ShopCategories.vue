<template>
  <ul class="categories"
       v-if="categories && categories.length !== 0">
    <router-link
      class="item"
      v-for="category in categories"
      :key="category"
      :to="{ name: 'shop-category', params: {id:category.id} }">
      {{category.title}}
    </router-link>
  </ul>
  <div class="block-empty"
    v-else>
    Категорий нет
  </div>
</template>

<script>
export default {
  name: 'ShopCategories',
  props: {
    categories: {
      type: Object,
      require: true
    }
  }
}
</script>

<style scoped>
.categories {
  align-content: space-between;
  display: flex;
  flex-wrap: wrap;
  min-height: 90px;
  justify-content: space-evenly;
}
.categories .item {
  background: #fff;
  border: 4px solid #ddd;
  border-radius: 10px;
  box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  margin-bottom: 1rem;
  overflow: hidden;
  padding: 1rem;
}
.categories .item.active, .categories .item:hover {
  border: 4px solid #42b983;
}
</style>
