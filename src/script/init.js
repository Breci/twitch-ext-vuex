import TwitchExtensionHelperNotFound from "../errors/TwitchExtensionHelperNotFound";

export default {
  store: null,

  /**
   * Basic initialisation of the VueX store for Twitch Extensions
   * @param store The VueX store instance
   * @param settings settings for the store
   */
  init(store,settings) {
    if (window.Twitch.ext) {
      this.store = store;
      this.initListeners(settings);
    } else {
      throw new TwitchExtensionHelperNotFound();
    }
  },
  
  initTestingFlags(settings){
    const flags = settings.forceFlags
    if (flags && flags.forceIsBitsEnabled){
      this.store.dispatch('setExtensionForceIsBitsEnabled',flags.forceIsBitsEnabled)
    }
  },

  initListeners(settings) {
    this.initTestingFlags(settings);
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
    let warned = false;
    window.Twitch.ext.features.onChanged(() => {
      if (this.store.state.forceIsBitsEnabled && !warned && this.store.state.queryParams.state !== "testing"){
        console.warn("TwitchExt-Vuex: You have the force flag forceIsBitsEnabled activated, remember to disable it when releasing your extension.")
        warned = true;
      }
      this.store.dispatch("updateFeatures",{
        forceIsBitsEnabled: this.store.state.forceIsBitsEnabled
      });
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
