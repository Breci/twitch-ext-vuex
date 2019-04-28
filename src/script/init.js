import TwitchExtensionHelperNotFound from "../errors/TwitchExtensionHelperNotFound";

export default {
  store: null,

  /**
   * Basic initialisation of the VueX store for Twitch Extensions
   * @param store The VueX store instance
   */
  init(store) {
    if (window.Twitch.ext) {
      this.store = store;
      this.initListeners();
    } else {
      throw new TwitchExtensionHelperNotFound();
    }
  },

  initListeners() {
    this.initFeatureFlags();
    this.initClientQueryParams();
    this.initConfigurationService();
    this.initOnAuthorized();
    this.initOnContext();
    this.onHighlightChanged();
    this.initOnPositionChanged();
  },

  initFeatureFlags() {
    this.store.dispatch("updateFeatures");
    window.Twitch.ext.features.onChanged(() => {
      this.store.dispatch("updateFeatures");
    });
  },
  initClientQueryParams() {
    this.store.dispatch("updateQueryParams");
  },

  initOnAuthorized() {
    window.Twitch.ext.onAuthorized(async auth => {
      await this.store.dispatch("updateUserInfo");
      if (!this.initialized) {
        await this.store.dispatch("loadBitProducts");
        await this.store.dispatch("setChannelId", auth.channelId);
      }
    });
  },

  initOnContext() {
    window.Twitch.ext.onContext(async (context, contextFields) => {
      await this.store.dispatch("updateContext", {
        context,
        contextFields
      });
    });
  },

  initOnPositionChanged() {
    window.Twitch.ext.onPositionChanged(async position => {
      await this.store.dispatch("updatePosition", position);
    });
  },

  initConfigurationService() {
    window.Twitch.ext.configuration.onChanged(() => {
      this.store.dispatch(
        "updateConfiguration",
        window.Twitch.ext.configuration
      );
    });
  },
  onHighlightChanged() {
    window.Twitch.ext.onHighlightChanged(isHighlighted => {
      this.store.dispatch("updateHighlight", isHighlighted);
    });
  }
};
