import actions from './actions'
import mutations from './mutations'


let store = {
    state: {
        anchor:"",
        language:"",
        locale:"",
        mode:"",
        platform:"",
        popout:false,
        state:"",
    },
    mutations,
    actions
};
export default store