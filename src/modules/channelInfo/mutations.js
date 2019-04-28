export default {
    SET_CHANNEL_ID (state,channelId) {
        state.channelId = channelId;
    },
    SET_CHANNEL_INFO_INITIALIZED(state){
        state.initialized = true;
    }
}