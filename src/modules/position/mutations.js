export default {
    UPDATE_POSITION(state,position) {
        state.position = position;
    },
    SET_POSITION_INITIALIZED(state){
        state.initialized = true;
    }
}