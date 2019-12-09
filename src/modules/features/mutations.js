export default {
    /**
     * @param state
     * @param forceFlags settings to force flags to a specific value
     */
    UPDATE_FEATURES(state, forceFlags) {
        state.isChatEnabled = window.Twitch.ext.features.isChatEnabled;
        state.isSubscriptionStatusAvailable = window.Twitch.ext.features.isSubscriptionStatusAvailable;
        state.isBitsEnabled = ( forceFlags && forceFlags.forceIsBitsEnabled ) || window.Twitch.ext.features.isBitsEnabled;
    }
}