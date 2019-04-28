import actions from './actions'
import mutations from './mutations'


let store = {
    state: {
        isHighlighted:false
    },
    mutations,
    actions
};
export default store