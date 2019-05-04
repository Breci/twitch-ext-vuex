import actions from "./actions";
import mutations from "./mutations";

export const UserInfoModule = {
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
