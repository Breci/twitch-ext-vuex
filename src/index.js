import {
  UserInfoModule,
  ChannelInfoModule,
  ContextModule,
  ConfigurationServiceModule,
  ClientQueryParametersModule,
  BitsModule,
  FeaturesModule,
  HighlightModule,
  PositionModule,
  ActionsModule,
  ExtensionModule
} from "./modules";
import initScript from "./script/init";
import plugin from "./plugin";

const store = {
  modules: {
    viewer: UserInfoModule,
    channel: ChannelInfoModule,
    context: ContextModule,
    configuration: ConfigurationServiceModule,
    queryParams: ClientQueryParametersModule,
    bits: BitsModule,
    features: FeaturesModule,
    highlight: HighlightModule,
    position: PositionModule,
    actions: ActionsModule,
    extension: ExtensionModule
  },
  getters: {
    isExtensionInitialized: state => {
      return (
        state.channel.initialized &&
        state.configuration.initialized &&
        state.context.initialized &&
        state.position.initialized &&
        state.viewer.initialized
      );
    }
  }
};

export {
  UserInfoModule,
  ChannelInfoModule,
  ContextModule,
  ConfigurationServiceModule,
  ClientQueryParametersModule,
  BitsModule,
  FeaturesModule,
  HighlightModule,
  PositionModule,
  ActionsModule
} from "./modules";

export const DefaultStore = store;
export const ExtensionPlugin = plugin;

export default {
  store,
  init: initScript.init,
  plugin: plugin
};
