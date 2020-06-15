const redux = require('redux');
const createStore = redux.createStore;

// Action
// action is javascript object that contains what needs to change in the state
// action creator is a function that returns the action
const BUY_CAKE = 'BUY_CAKE';
function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

// ****Reducer***
//Reducer = (prevState, action)=>newState
const initialState = {
    numOfCakes: 10
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}

//*****Store****/
const store = createStore(reducer);
console.log('Initial State', store.getState());

//*********Subscribtion*********
const unsubscribe = store.subscribe(() => console.log('Updated State', store.getState()));

//*********dispatching actions*********
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
unsubscribe()