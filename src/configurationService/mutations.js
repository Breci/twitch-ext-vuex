export default {
    UPDATE_GLOBAL(state,segment) {
        state.global = segment;
    },
    UPDATE_DEVELOPER(state,segment) {
        state.developer = segment;
    },
    UPDATE_BROADCASTER(state,segment) {
        state.broadcaster = segment;
    },
    SET_CONFIGURATION_SERVICE_INITIALIZED(state){
        state.initialized = true;
    }
}