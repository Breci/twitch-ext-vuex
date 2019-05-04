import actions from "./actions";
import mutations from "./mutations";

export const ConfigurationServiceModule = {
  state: {
    initialized: false,
    developer: null,
    global: null,
    broadcaster: null
  },
  getters: {
    globalConfigurationServiceSegment(state) {
      if (state.global && state.global.content) {
        try {
          return JSON.parse(state.global.content);
        } catch (e) {
          return state.global.content;
        }
      } else {
        return null;
      }
    },
    developerConfigurationServiceSegment(state) {
      if (state.developer && state.developer.content) {
        try {
          return JSON.parse(state.developer.content);
        } catch (e) {
          return state.developer.content;
        }
      } else {
        return null;
      }
    },
    broadcasterConfigurationServiceSegment(state) {
      if (state.broadcaster && state.broadcaster.content) {
        try {
          return JSON.parse(state.broadcaster.content);
        } catch (e) {
          return state.broadcaster.content;
        }
      } else {
        return null;
      }
    }
  },
  mutations,
  actions
};
