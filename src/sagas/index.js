import { delay } from 'redux-saga';
import { takeEvery, put, call, select } from 'redux-saga/effects';

function apiGet(text, length) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(text + ' - TodoApp: ' + length);
            //reject(text + ' - TodoApp');
        }, 2000);
    });
}

function* asyncAddTodo(action) {
    try{
        // SELECT: busca informações de um state
        const todos = yield select(state => state.todos);

        // DELAY: espera um tempo para executar
        yield delay(2000);

        // CALL: realiza a chamada a uma função assíncrona
        const response = yield call(apiGet, action.text, todos.length);
        
        // PUT: realiza a chamada a um action
        yield put({ type: 'ADD_TODO', text: response });
    } catch (err) {
        yield put({ type: 'ERROR' });
    }
}

/*function* getTodoList(){
    try{
        const response = yield call(apiGet);

        yield put({ type: 'SUCCESS_TODO_LIST', payload: { data: response }});
    } catch(err) {
        yield put({ type: 'FAILURE_TODO_LIST' });
    }
}*/

export default function* root() {
    yield [
        takeEvery('ASYNC_ADD_TODO', asyncAddTodo),
    ];

    /*yield [
        takeEvery('REQUEST_TODO_LIST', getTodoList),
    ];*/
}