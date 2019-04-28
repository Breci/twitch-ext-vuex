export default {
    async loadBitProducts({commit}){
        const products = await window.Twitch.ext.bits.getProducts()
        commit('SET_BIT_PRODUCTS',products)
        return products
    },
    async getProducts({state,dispatch}){
        if (state.bitProducts){
            return state.bitProducts
        }
        else{
            return dispatch('loadBitProducts')
        }
    },
    onTransactionCancelled({dispatch},callback){
      window.Twitch.ext.bits.onTransactionCancelled(()=>{
          dispatch('setHasOngoingBitTransaction',false)
          callback();
      })  
    },
    onTransactionComplete({dispatch},callback){
      window.Twitch.ext.bits.onTransactionComplete(()=>{
          dispatch('setHasOngoingBitTransaction',false)
          callback();
      })  
    },
    setUseLoopBack({},setUseLoopBack){
      window.Twitch.ext.bits.setUseLoopBack(setUseLoopBack);  
    },
    showBitsBalance(){
      window.Twitch.ext.bits.showBitsBalance();  
    },
    useBits({},sku){
        dispatch('setHasOngoingBitTransaction',true)
        window.Twitch.ext.bits.useBits(sku);  
    },
    setHasOngoingBitTransaction({commit},hasOngoingBitTransaction){
        commit('SET_HAS_ONGOING_BIT_TRANSACTION',hasOngoingBitTransaction)
    }
}