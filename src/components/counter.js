import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {increment, decrement} from "../actions";

class Counter extends Component {

    render() {
        return (
            <div>
                Counter
                <div>
                    <h1>VALUE : {this.props.value}</h1>
                </div>
                <div>
                    <button value="plus" onClick={(e)=>{
                        this.props.increment(this.props.value, this.props.clickCount)
                    }}>+</button>
                    <button value="minus" onClick={(e)=>{
                        this.props.decrement(this.props.value, this.props.clickCount)
                    }}>-</button>
                    <div>{this.props.message}</div>
                    <div>총 횟수 : {this.props.clickCount}</div>
                </div>
            </div>
        );
    }
}

// store 내부 state 를 현재 컴포넌트 props 와 매핑
function mapStateProps(state){
    return{
        value: state.counterReducer.number,
        message: state.counterReducer.message,
        clickCount : state.counterReducer.clickCount,
    }
}
// props 로 특정 함수 지정
// 해당 함수의 action dispatch
function mapDispatchToProps(dispatch){
    return{
        increment: bindActionCreators(increment, dispatch),
        decrement: bindActionCreators(decrement, dispatch)
    }
}
// 현재 컴포넌트와 Store 연결
Counter = connect(mapStateProps, mapDispatchToProps)(Counter);

export default Counter;