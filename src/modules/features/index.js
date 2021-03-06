import actions from "./actions";
import mutations from "./mutations";

export const FeaturesModule = {
  state: {
    isChatEnabled: false,
    isBitsEnabled: false,
    isSubscriptionStatusAvailable: false
  },
  mutations,
  actions
};
