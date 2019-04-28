export default {
    updateContext (context,contextData) {
        context.commit('UPDATE_CONTEXT',contextData)
        context.commit('SET_CONTEXT_INITIALIZED',contextData)
    }
}