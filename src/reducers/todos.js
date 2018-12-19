export default function todos(state = [], action) {
    switch(action.type){
        case 'ADD_TODO':
            return [ ...state, {id: Math.random(), text: action.text}]
        case 'REMOVE_TODO':

        default:
            return state;
    }
}