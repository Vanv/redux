const { createStore } = require('redux');

const initialState = {
    age: 21
};

const myReducer = (state = initialState, action) => {
    const newState = {...state};
    if(action.type === 'ADD') {
        newState.age += 1;
    }
    if(action.type === 'SUBSTRACT') {
        newState.age -= 1;
    }
    return newState;
    
}   


const store = createStore(myReducer);

//action

//dispatch
console.log('initial state ' , store.getState());
store.dispatch({type: 'ADD'});
console.log('after add ' , store.getState());
store.dispatch({type: 'SUBSTRACT'});
console.log('after substract ' , store.getState());
console.log(store.getState());
