//Counter 관련 saga 들 모음
import {put, call, take} from 'redux-saga/effects';
import {actionType} from "../actions";
//take = 액션 캐치
//call = 액션 호출
//put = 액션을 내보냄

// * 표시는 비동기 작업이라는 뜻
function* increase(number, clickCount) {
    try{
        //yield = yield 의 뒷 부분에 나오는 작업을 실행완료해야 다음 작업을 실행한다는 표시
        yield put({
            type: actionType.INCREMENT_SUCCESS,
            data: number+1,
            clickCount : clickCount +1
        });
        return true;
    }catch{
        yield put({
            type: actionType.INCREMENT_FAILED
        });
        return false;
    }
}

export function* increaseFlow(){
    while (true){
        //  Increment_request 만을 캐치함
        let request = yield take(actionType.INCREMENT_REQUEST);
        yield call(increase, request.number, request.clickCount)
    }
}

function* decrease(number, clickCount) {
    try{
        yield put({
            type: actionType.DECREMENT_SUCCESS,
            data: number-1,
            clickCount : clickCount +1
        });
        return true;
    }catch{
        yield put({
            type: actionType.DECREMENT_FAILED
        });
        return false;
    }
}

export function* decreaseFlow(){
    while (true){
        //  decrement_request 만을 캐치함
        let request = yield take(actionType.DECREMENT_REQUEST);
        yield call(decrease, request.number, request.clickCount)
    }
}