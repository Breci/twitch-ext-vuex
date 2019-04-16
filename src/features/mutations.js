export default {
    UPDATE_FEATURES(state) {
        state.isChatEnabled = window.Twitch.ext.features.isChatEnabled;
        state.isSubscriptionStatusAvailable = window.Twitch.ext.features.isSubscriptionStatusAvailable;
        //state.isBitsEnabled = window.Twitch.ext.features.isBitsEnabled;
        state.isBitsEnabled = true; //TODO remove that line when isbitsenable works
    },
    SET_FEATURES_INITIALIZED(state){
        state.initialized = true;
    }
}