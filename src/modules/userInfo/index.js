import actions from "./actions";
import mutations from "./mutations";

let store = {
  state: {
    initialized: false,
    opaqueId: "",
    userId: null,
    role: "",
    isLinked: false,
    sessionToken: "",
    subscriptionStatus: null
  },
  mutations,
  actions
};
export default store;
