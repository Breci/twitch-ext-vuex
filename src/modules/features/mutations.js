export default {
    /**
     * @param state
     * @param forceBitsEnabled if true, the value of isBitsEnabled will always be true, used for testing 
     */
    UPDATE_FEATURES(state, {forceBitsEnabled}) {
        state.isChatEnabled = window.Twitch.ext.features.isChatEnabled;
        state.isSubscriptionStatusAvailable = window.Twitch.ext.features.isSubscriptionStatusAvailable;
        state.isBitsEnabled = forceBitsEnabled || window.Twitch.ext.features.isBitsEnabled;
    }
}