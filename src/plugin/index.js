import initScript from "../script/init";
import { DefaultStore } from "../index";

const DEFAULT_MODULE_NAME = "twitch";

const plugin = {
  install(Vue, { module = DEFAULT_MODULE_NAME, store }) {
    store.registerModule(module, DefaultStore);
    initScript.init(store);
    Vue.prototype.$twitchExtension = {
      // custom
      get initialized() {
        return store.getters.isExtensionInitialized;
      },
      get version() {
        return store.state[module].extension.version;
      },
      get environment() {
        return store.state[module].extension.environment;
      },
      onAuthorized(callback) {
        return store.dispatch("onAuthorized", callback);
      },
      onContext(callback) {
        return store.dispatch("onContext", callback);
      },
      onError(callback) {
        return store.dispatch("onError", callback);
      },
      onHighlightChanged(callback) {
        return store.dispatch("onHighlightChanged", callback);
      },
      onPositionChanged(callback) {
        return store.dispatch("onPositionChanged", callback);
      },
      onVisibilityChanged(callback) {
        return store.dispatch("onVisibilityChanged", callback);
      },
      send(target, contentType, message) {
        return store.dispatch("sendPubSubMessage", {
          target,
          contentType,
          message
        });
      },
      listen(target, callback) {
        return store.dispatch("listenPubSubMessage", {
          target,
          callback
        });
      },
      unlisten(target, callback) {
        return store.dispatch("unlistenPubSubMessage", {
          target,
          callback
        });
      },
      actions: {
        followChannel(channelName) {
          return store.dispatch("followChannel", channelName);
        },
        minimize() {
          return store.dispatch("minimize");
        },
        onFollow(callback) {
          return store.dispatch("onFollow", callback);
        },
        requestIdShare() {
          return store.dispatch("requestIdShare");
        }
      },
      bits: {
        //custom
        getBitsAmount(sku) {
          return store.dispatch("getBitsAmount", sku);
        },
        //custom
        get hasOngoingBitTransaction() {
          return store.state[module].bits.hasOngoingBitTransaction;
        },
        getProducts() {
          return store.dispatch("getProducts");
        },
        onTransactionCancelled(callback) {
          return store.dispatch("onTransactionCancelled", callback);
        },
        onTransactionComplete(callback) {
          return store.dispatch("onTransactionComplete", callback);
        },
        setUseLoopBack() {
          return store.dispatch("setUseLoopBack");
        },
        showBitsBalance() {
          return store.dispatch("showBitsBalance");
        },
        useBits(sku) {
          return store.dispatch("useBits", sku);
        }
      },
      channel: {
        // custom
        get id() {
          return store.state[module].channel.channelId;
        },
        // custom
        get initialized() {
          return store.state[module].channel.initialized;
        }
      },
      configuration: {
        // custom
        get initialized() {
          return store.state[module].configuration.initialized;
        },
        get broadcaster() {
          return store.state[module].configuration.broadcaster;
        },
        get developer() {
          return store.state[module].configuration.developer;
        },
        get global() {
          return store.state[module].configuration.global;
        },
        onChanged(callback) {
          return store.dispatch("onConfigurationChanged", callback);
        },
        set(segment, version, content) {
          return store.dispatch("setSegment", {
            segment,
            version,
            content
          });
        }
      },
      context: {
        // custom
        get initialized() {
          return store.state[module].context.initialized;
        },
        get arePlayerControlsVisible() {
          return store.state[module].context.arePlayerControlsVisible;
        },
        get bitrate() {
          return store.state[module].context.bitrate;
        },
        get bufferSize() {
          return store.state[module].context.bufferSize;
        },
        get displayResolution() {
          return store.state[module].context.displayResolution;
        },
        get game() {
          return store.state[module].context.game;
        },
        get hlsLatencyBroadcaster() {
          return store.state[module].context.hlsLatencyBroadcaster;
        },
        get hostingInfo() {
          return store.state[module].context.hostingInfo;
        },
        get isFullScreen() {
          return store.state[module].context.isFullScreen;
        },
        get isMuted() {
          return store.state[module].context.isMuted;
        },
        get isPaused() {
          return store.state[module].context.isPaused;
        },
        get isTheatreMode() {
          return store.state[module].context.isTheatreMode;
        },
        get language() {
          return store.state[module].context.language;
        },
        get mode() {
          return store.state[module].context.mode;
        },
        get playbackMode() {
          return store.state[module].context.playbackMode;
        },
        get theme() {
          return store.state[module].context.theme;
        },
        get videoResolution() {
          return store.state[module].context.videoResolution;
        },
        get volume() {
          return store.state[module].context.volume;
        }
      },
      highlight: {
        get isHighlighted() {
          return store.state[module].highlight.isHighlighted;
        }
      },
      features: {
        get isChatEnabled() {
          return store.state[module].features.isChatEnabled;
        },
        get isSubscriptionStatusAvailable() {
          return store.state[module].features.isSubscriptionStatusAvailable;
        },
        get isBitsEnabled() {
          return store.state[module].features.isBitsEnabled;
        },
        onChanged(callback) {
          return store.dispatch("onFeatureChanged", callback);
        }
      },
      position: {
        // custom
        get initialized() {
          return store.state[module].position.initialized;
        },
        get position() {
          return store.state[module].position.position;
        }
      },
      queryParams: {
        get anchor() {
          return store.state[module].queryParams.anchor;
        },
        get language() {
          return store.state[module].queryParams.language;
        },
        get locale() {
          return store.state[module].queryParams.locale;
        },
        get mode() {
          return store.state[module].queryParams.mode;
        },
        get platform() {
          return store.state[module].queryParams.platform;
        },
        get popout() {
          return store.state[module].queryParams.popout;
        },
        get state() {
          return store.state[module].queryParams.state;
        },
        get legacyComponentDesign() {
          return store.state[module].queryParams.legacyComponentDesign;
        }
      },
      purchases: {
        // TODO
      },
      rig: {
        // TODO
      },
      viewer: {
        // custom
        get initialized() {
          return store.state[module].viewer.initialized;
        },
        get id() {
          return store.state[module].viewer.userId;
        },
        get opaqueId() {
          return store.state[module].viewer.opaqueId;
        },
        get role() {
          return store.state[module].viewer.role;
        },
        get isLinked() {
          return store.state[module].viewer.isLinked;
        },
        get sessionToken() {
          return store.state[module].viewer.sessionToken;
        },
        get subscriptionStatus() {
          return store.state[module].viewer.subscriptionStatus;
        }
      }
    };
  }
};

export const ExtensionPlugin = plugin;

export default plugin;
