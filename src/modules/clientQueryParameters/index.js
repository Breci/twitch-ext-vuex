import actions from "./actions";
import mutations from "./mutations";

export const ClientQueryParametersModule = {
  state: {
    anchor: "",
    language: "",
    locale: "",
    mode: "",
    platform: "",
    popout: false,
    state: ""
  },
  mutations,
  actions
};
