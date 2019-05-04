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
    getBitAmount: state => sku => {
      const product = state.bitProducts.find(product => product.sku === sku);
      return (product && product.cost.amount) || 0;
    }
  }
};
