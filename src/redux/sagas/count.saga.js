import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getCount() {
    // get all movies from the DB
    try {
        const count = yield axios.get('/api/count');
        console.log('get COUNT saga:', count.data);
        yield put({ type: 'SET_COUNT', payload: count.data });

    } catch {
        console.log('get all error');
    }
}

function* countSaga() {
    yield takeLatest('GET_COUNT', getCount);
    // yield takeLatest('ADD_COUNT', getCount)
}

export default countSaga;