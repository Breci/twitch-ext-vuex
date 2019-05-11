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
    this.initExtensionInfo()
    this.initFeatureFlags();
    this.initClientQueryParams();
    this.initConfigurationService();
    this.initOnAuthorized();
    this.initOnContext();
    this.onHighlightChanged();
    this.initOnPositionChanged();
  },
    initExtensionInfo(){
    this.store.dispatch('setExtensionInfo')
    },

  initFeatureFlags() {
    window.Twitch.ext.features.onChanged(() => {
      this.store.dispatch("updateFeatures");
    });
  },
  initClientQueryParams() {
    this.store.dispatch("updateQueryParams");
  },

  initOnAuthorized() {
    window.Twitch.ext.onAuthorized( auth => {
       this.store.dispatch("updateUserInfo");
      if (!this.initialized) {
         this.store.dispatch("setChannelId", auth.channelId);
      }
    });
  },

  initOnContext() {
    window.Twitch.ext.onContext( (context, contextFields) => {
       this.store.dispatch("updateContext", {
        context,
        contextFields
      });
    });
  },

  initOnPositionChanged() {
    window.Twitch.ext.onPositionChanged( position => {
       this.store.dispatch("updatePosition", position);
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
