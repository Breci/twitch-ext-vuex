export default {
    updateToken (context,token) {
        context.commit('UPDATE_TOKEN',token)
    },
    updateIsLinked (context,isLinked) {
        context.commit('UPDATE_IS_LINKED',isLinked)
    },
    updateRole (context,role) {
        context.commit('UPDATE_ROLE',role)
    },
    updateUserId (context,userId) {
        context.commit('UPDATE_USER_ID',userId)
    },
    updateOpaqueId (context,opaqueId) {
        context.commit('UPDATE_OPAQUE_ID',opaqueId)
    },
    updateSubscriptionStatus (context,subscriptionStatus) {
        context.commit('UPDATE_SUBSCRIPTION_STATUS',subscriptionStatus)
    },
    updateUserInfo({ dispatch, commit }){
        dispatch('updateToken', window.Twitch.ext.viewer.sessionToken)
        dispatch('updateIsLinked', window.Twitch.ext.viewer.isLinked)
        dispatch('updateRole', window.Twitch.ext.viewer.role)
        dispatch('updateUserId', window.Twitch.ext.viewer.id)
        dispatch('updateOpaqueId', window.Twitch.ext.viewer.opaqueId)
        dispatch('updateSubscriptionStatus', window.Twitch.ext.viewer.subscriptionStatus)
        commit('SET_USER_INFO_INITIALIZED')
    }
}