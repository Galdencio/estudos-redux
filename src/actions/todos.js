export function addTodo(text) {
    return {
        type: 'ASYNC_ADD_TODO',
        text
    }
}

/*
export function requestTodoList(text) {
    return {
        type: 'REQUEST_TODO_LIST',
    }
}
*/