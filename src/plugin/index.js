import initScript from "../script/init";
import { DefaultStore } from "../index";

const DEFAULT_MODULE_NAME = "twitch";

const plugin = {
  install(Vue, { module = DEFAULT_MODULE_NAME, store }) {
    store.registerModule(module, DefaultStore);
    initScript.init(store);
    Vue.prototype.$twitchExtension = {
      initialized() {
        return store.getters.isExtensionInitialized();
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
        return store.dispatch("send", {
          target,
          contentType,
          message
        });
      },
      listen(target, callback) {
        return store.dispatch("listen", {
          target,
          callback
        });
      },
      unlisten(target, callback) {
        return store.dispatch("unlisten", {
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
          return store.getters.getBitsAmount(sku);
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
        broadcaster() {
          return store.state[module].configuration.broadcaster;
        },
        developer() {
          return store.state[module].configuration.developer;
        },
        global() {
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
        initialized: {
          get value() {
            return store.state[module].context.initialized;
          }
        },
        arePlayerControlsVisible: {
          get value() {
            return store.state[module].context.arePlayerControlsVisible;
          }
        },
        bitrate: {
          get value() {
            return store.state[module].context.bitrate;
          }
        },
        bufferSize: {
          get value() {
            return store.state[module].context.bufferSize;
          }
        },
        displayResolution: {
          get value() {
            return store.state[module].context.displayResolution;
          }
        },
        game: {
          get value() {
            return store.state[module].context.game;
          }
        },
        hlsLatencyBroadcaster: {
          get value() {
            return store.state[module].context.hlsLatencyBroadcaster;
          }
        },
        hostingInfo: {
          get value() {
            return store.state[module].context.hostingInfo;
          }
        },
        isFullScreen: {
          get value() {
            return store.state[module].context.isFullScreen;
          }
        },
        isMuted: {
          get value() {
            return store.state[module].context.isMuted;
          }
        },
        isPaused: {
          get value() {
            return store.state[module].context.isPaused;
          }
        },
        isTheatreMode: {
          get value() {
            return store.state[module].context.isTheatreMode;
          }
        },
        language: {
          get value() {
            return store.state[module].context.language;
          }
        },
        mode: {
          get value() {
            return store.state[module].context.mode;
          }
        },
        playbackMode: {
          get value() {
            return store.state[module].context.playbackMode;
          }
        },
        theme: {
          get value() {
            return store.state[module].context.theme;
          }
        },
        videoResolution: {
          get value() {
            return store.state[module].context.videoResolution;
          }
        },
        volume: {
          get value() {
            return store.state[module].context.volume;
          }
        }
      },
      highlight: {
        isHighlighted: {
          get value() {
            return store.state[module].highlight.isHighlighted;
          }
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
        }
      },
      purchases: {
        // TODO
      },
      rig: {
        // TODO
      },
      viewer: {
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
