import actions from "./actions";
import mutations from "./mutations";

export const BitsModule = {
  state: {
    bitProducts: [],
    hasOngoingBitTransaction: false
  },
  mutations,
  actions,
  getters: {
    getBitsAmount: state => async sku => {
      const product = state.bitProducts.find(product => product.sku === sku);
      return (product && product.cost.amount) || 0;
    }
  }
};
