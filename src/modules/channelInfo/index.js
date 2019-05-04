import actions from "./actions";
import mutations from "./mutations";

export const ChannelInfoModule = {
  state: {
    initialized: false,
    channelId: ""
  },
  getters: {},
  mutations,
  actions
};
