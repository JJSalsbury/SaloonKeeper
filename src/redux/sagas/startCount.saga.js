import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* startCount(action) {

    const countId = action.payload.id;
    const productCount = action.payload;
    console.log('start Count SAGA - id & product:', productCount);
    
    try {
        yield axios.put(`/api/count/${countId}`, productCount); //send id of item to delete
        yield put({ type: 'GET_COUNT'}); //call get for updated count list
    } catch (error) {
        console.log('User get request failed', error);
    }
}

function* startCountSaga() {
    yield takeLatest('START_COUNT', startCount);
}

export default startCountSaga;