export default {
    async loadBitsProducts({commit}){
        const products = await window.Twitch.ext.bits.getProducts()
        commit('SET_BIT_PRODUCTS',products)
    }
}