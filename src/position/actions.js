export default {
    updatePosition (context,position) {
        context.commit('UPDATE_POSITION',position)
        context.commit('SET_POSITION_INITIALIZED')
    }
}