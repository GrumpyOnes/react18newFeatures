export default function createStore(reducer) {
    let currentState;
    let listeners = [];
  
    function getState() {
      return currentState;
    }
  
    function dispatch(action) {
      currentState = reducer(action, currentState);
  
      listeners.forEach((listener) => listener());
    }
  
    function subscribe(listener) {
      listeners.push(listener);
    }
  
    dispatch({ type: "ereggdffsfds@#$@$@$#@$FDFDS" });
  
    return {
      getState,
      dispatch,
      subscribe,
    };
  }