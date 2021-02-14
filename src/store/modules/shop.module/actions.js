import axios from '@/axios/shop'

export default {
  async loadCategories ({ commit }) {
    try {
      const { data } = await axios
        .get('categories')
        .catch(() => { throw new Error('Error in method loadCategories') })
      if (data) {
        commit('setCategories', data)
      }
    } catch (e) { console.error(e.message) }
  },
  async loadProducts ({ commit }) {
    try {
      const { data } = await axios
        .get('products')
        .catch(() => { throw new Error('Error in method loadProducts') })
      if (data) {
        commit('setProducts', data)
      }
    } catch (e) { console.error(e.message) }
  }
}
