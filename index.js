const redux = require('redux');

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