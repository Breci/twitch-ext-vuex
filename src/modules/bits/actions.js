export default {
    getProducts() {
        return window.Twitch.ext.bits.getProducts()
    },
    onTransactionCancelled({dispatch}, callback) {
        window.Twitch.ext.bits.onTransactionCancelled(() => {
            dispatch('setHasOngoingBitTransaction', false)
            callback();
        })
    },
    onTransactionComplete({dispatch}, callback) {
        window.Twitch.ext.bits.onTransactionComplete(() => {
            dispatch('setHasOngoingBitTransaction', false)
            callback();
        })
    },
    setUseLoopBack({}, setUseLoopBack) {
        window.Twitch.ext.bits.setUseLoopBack(setUseLoopBack);
    },
    showBitsBalance() {
        window.Twitch.ext.bits.showBitsBalance();
    },
    useBits({}, sku) {
        dispatch('setHasOngoingBitTransaction', true)
        window.Twitch.ext.bits.useBits(sku);
    },
    setHasOngoingBitTransaction({commit}, hasOngoingBitTransaction) {
        commit('SET_HAS_ONGOING_BIT_TRANSACTION', hasOngoingBitTransaction)
    },
    async getBitsAmount({dispatch}, sku) {
        const product = await dispatch('getProducts').find(product => product.sku === sku);
        return product ? product.cost.amount : 0;
    }

}