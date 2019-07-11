export const actionType={
    //Request Counter Action
    INCREMENT_REQUEST : 'INCREMENT_REQUEST',
    DECREMENT_REQUEST : 'DECREMENT_REQUEST',
    //Success Counter Action
    INCREMENT_SUCCESS: 'INCREMENT_SUCCESS',
    DECREMENT_SUCCESS: 'DECREMENT_SUCCESS',
    //Failed Counter Action
    INCREMENT_FAILED: 'INCREMENT_FAILED',
    DECREMENT_FAILED : 'INCREMENT_FAILED',
};

export function increment(number, clickCount){
    return{
        type:actionType.INCREMENT_REQUEST,
        number, clickCount
    }
}
export function decrement(number,clickCount){
    return{
        type:actionType.DECREMENT_REQUEST,
        number, clickCount
    }
}