export default {
    UPDATE_TOKEN (state,token) {
        state.sessionToken = token;
    },
    UPDATE_IS_LINKED (state,isLinked) {
        state.isLinked = isLinked;
    },
    UPDATE_ROLE (state,role) {
        state.role = role;
    },
    UPDATE_USER_ID (state,userId) {
        state.userId = userId;
    },
    UPDATE_OPAQUE_ID (state,opaqueId) {
        state.opaqueId = opaqueId;
    },
    UPDATE_SUBSCRIPTION_STATUS (state,subscriptionStatus) {
        state.subscriptionStatus = subscriptionStatus
    },
    SET_USER_INFO_INITIALIZED(state){
        state.initialized = true;
    }
}