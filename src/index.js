import React from "react";
import { render } from "react-dom";
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Counter from "./components/Counter";
import "./index.css";

const initialState = {
  count: 0
}

//did with if/else just because but in most cases use a switch for conciseness
function reducer(state = initialState, action) {
  console.log(state, action)
  if(action.type === 'INCREMENT') {
    return {
      count: state.count + 1
    }
  }
  else if(action.type === 'DECREMENT') {
    return {
      count: state.count - 1
    }
  }
  else if(action.type === 'RESET') {
    return {
      count: 0
    }
  }
  return state
}

const store = createStore(reducer)
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
store.dispatch({ type: "RESET" });

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

render(<App />, document.getElementById("root"));

