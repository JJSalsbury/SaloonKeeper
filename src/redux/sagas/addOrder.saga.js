import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addOrder(action) {
    //add movie to DB
    try{
        console.log('Payload in addOrder SAGA:', action.payload);
        yield axios.post('/api/count', action.payload);
        yield axios.put('/api/ordered', action.payload);
        yield put({ type: 'GET_PRODUCT'});

    } catch (error) {
        console.log('addCount error:', error)
    } 
}

function* addOrderSaga() {
    // yield takeLatest('COUNT_ITEM', addCount);
    yield takeLatest('ADD_ORDER', addOrder)
}

export default addOrderSaga;