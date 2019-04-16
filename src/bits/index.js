import actions from "./actions";
import mutations from "./mutations";

let store = {
  state: {
    bitProducts: []
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
export default store;
