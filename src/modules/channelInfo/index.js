import actions from "./actions";
import mutations from "./mutations";

let store = {
  state: {
    initialized: false,
    channelId: ""
  },
  getters: {},
  mutations,
  actions
};
export default store;
