import actions from "./actions";
import mutations from "./mutations";

export const PositionModule = {
  state: {
    initialized: false,
    position: null
  },
  mutations,
  actions
};
