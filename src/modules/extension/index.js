import actions from "./actions";
import mutations from "./mutations";

export const ExtensionModule = {
  state: {
    version: 0,
    environment: "production"
  },
  mutations,
  actions
};
