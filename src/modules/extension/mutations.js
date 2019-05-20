export default {
    SET_EXTENSION_INFO(state) {
        state.version = window.Twitch.ext.version;
        state.environment = window.Twitch.ext.environment;
    }
}