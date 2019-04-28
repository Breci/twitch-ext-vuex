export default {
    UPDATE_CONTEXT(state,{context,contextFields}) {
        contextFields.forEach(field=>{
            state[field] = context[field];
        });
    },
    SET_CONTEXT_INITIALIZED(state){
        state.initialized = true;
    }
}