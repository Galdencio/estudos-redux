/*const INITIAL_STATE = {
    data: [],
    loading: false,
    error: false
};*/

export default function todos(state = [] /*INITIAL_STATE*/, action) {
    switch(action.type){
        case 'ADD_TODO':
            return [ ...state, {id: Math.random(), text: action.text}]
        /*case 'REQUEST_TODO_LIST':
            return { ...state, loading: true };
        break;
        case 'SUCCESS_TODO_LIST':
            return { data: action.payload.data, loading: false, error: false };
        break;
        case 'FAILURE_TODO_LIST':
            return { data: [], loading: false, error: true };
        break;*/
        default:
            return state;
    }
}