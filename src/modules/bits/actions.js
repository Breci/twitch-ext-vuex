export default {
    async loadBitsProducts({commit}){
        const products = await window.Twitch.ext.bits.getProducts()
        commit('SET_BIT_PRODUCTS',products)
    },
    setHasOngoingBitTransaction({commit},hasOngoingBitTransaction){
        commit('SET_HAS_ONGOING_BIT_TRANSACTION',hasOngoingBitTransaction)
    }
}