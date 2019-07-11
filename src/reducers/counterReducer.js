import {actionType} from "../actions";

const counterInitialState ={
    number:0,
    message: '',
    clickCount : 0
};

export const counterReducer = (state = counterInitialState, action)=>{
  switch (action.type) {
      case actionType.INCREMENT_SUCCESS:
          return{
              ...state,
              number: action.data,
              message: '성공',
              clickCount : action.clickCount
          };
      case actionType.INCREMENT_FAILED:
          return{
              ...state,
          };
      case actionType.DECREMENT_SUCCESS:
          return{
              ...state,
              number: action.data,
              message: '실패',
              clickCount : action.clickCount
          };
      case actionType.DECREMENT_FAILED:
          return{
              ...state,
          };
      default:
          return{
              ...state
          }
  }  
};