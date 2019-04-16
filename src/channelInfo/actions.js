
export default {
    setChannelId (context,{channelId}) {
        if (channelId){
            context.commit('SET_CHANNEL_ID',channelId)
            context.commit('SET_CHANNEL_INFO_INITIALIZED');
        }
    }
}