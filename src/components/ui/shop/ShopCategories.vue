<template>
  <div class="categories"
       v-if="categories && categories.length">
    <div class="item"
      v-for="category in categories"
         :key="category">
      {{category.title}}
    </div>
  </div>
  <div class="categories-empty"
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
  height: 400px;
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
.categories-empty {
  background-color: #fff;
  border-radius: 5px;
  font-size: 26px;
  line-height: 32px;
  padding: 20px;
  text-align: center;
}
</style>
