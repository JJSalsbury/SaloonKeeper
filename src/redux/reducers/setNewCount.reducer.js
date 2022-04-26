// Used to store shelf items returned from the server
const setNewCountReducer = (state = [], action) => {
    if(action.type === 'START_COUNT') {
        return action.payload;
    } else if (action.type === 'START_NEW_COUNT') {
            return {
            ...state,
            [action.payload.property]: action.payload.value,
            }
        }
        return state;
        };


export default setNewCountReducer;