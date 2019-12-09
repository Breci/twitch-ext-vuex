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
    UserInfoModule,
    PubSubModule
} from "./modules";
import initScript from "./script/init";
import plugin from "./plugin";

const store = {
    state:{
        forceIsBitsEnabled:false,
    },
    actions:{
        setExtensionForceIsBitsEnabled(context,value) {
            context.commit('SET_FORCE_IS_BITS_ENABLED',value)
        }  
    },
    mutations:{
        SET_FORCE_IS_BITS_ENABLED(state,value){
            state.forceIsBitsEnabled = value
        }
    },
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
        extension: ExtensionModule,
        pubsub: PubSubModule
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
    ActionsModule,
    PubSubModule
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
