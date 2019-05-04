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
  PubSubModule,
  ActionsModule
} from "./modules";
import initScript from "./script/init";

const DefaultStore = {
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
    pubsub: PubSubModule,
    actions: ActionsModule
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
  PubSubModule,
  ActionsModule
} from "./modules";

export const linkStoreToHelper = initScript.init;

export default {
  store: DefaultStore,
  init: initScript.init
};
