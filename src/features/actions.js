export default {
    updateFeatures(context) {
        context.commit('UPDATE_FEATURES')
        context.commit('SET_FEATURES_INITIALIZED')
    }
}