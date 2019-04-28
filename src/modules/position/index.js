import actions from './actions'
import mutations from './mutations'


let store = {
    state: {
        initialized:false,
        position:null
    },
    mutations,
    actions
};
export default store