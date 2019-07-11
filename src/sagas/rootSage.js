import {fork} from 'redux-saga/effects'
import {increaseFlow, decreaseFlow} from "./counterSaga";


export default function* rootSage() {
    //fork 하위 프로세스 생성. increaseFlow 와 decreaseFlow 를 수행하는 스레드를 각각 생성
    // => 노예생성
    yield fork(increaseFlow);
    yield fork(decreaseFlow);
}