import actions from "./actions";
import mutations from "./mutations";

let store = {
  state: {
    initialized: false,
    isChatEnabled: false,
    isBitsEnabled: false,
    isSubscriptionStatusAvailable: null
  },
  mutations,
  actions
};
export default store;
