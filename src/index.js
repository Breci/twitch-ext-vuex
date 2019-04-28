import {
  UserInfoModule,
  ChannelInfoModule,
  ContextModule,
  ConfigurationServiceModule,
  ClientQueryParametersModule,
  BitsModule,
  FeaturesModule,
  HighlightModule,
  PositionModule
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
    position: PositionModule
  }
};

export {
  DefaultStore,
  UserInfoModule,
  ChannelInfoModule,
  ContextModule,
  ConfigurationServiceModule,
  ClientQueryParametersModule,
  BitsModule,
  FeaturesModule,
  HighlightModule,
  PositionModule
};

export default {
  store: DefaultStore,
  init: initScript.init
};
