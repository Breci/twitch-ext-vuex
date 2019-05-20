import {
    ActionsModule,
    BitsModule,
    ChannelInfoModule,
    ClientQueryParametersModule,
    ConfigurationServiceModule,
    ContextModule,
    ExtensionModule,
    FeaturesModule,
    HighlightModule,
    PositionModule,
    UserInfoModule
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
export const LinkHelperToStore = initScript.init

export default {
    store,
    link: initScript.init,
    plugin: plugin,
    modules: {
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
    }
};
