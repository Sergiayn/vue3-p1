export default {
  setCategories (state, data) {
    state.categories = data
  },
  setCurrentCategoryId (state, id) {
    state.currentCategoryId = id
  },
  setProducts (state, products) {
    state.products = products
  }
}
