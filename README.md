# Redux # 
** notes based on this tutorial https://daveceddia.com/redux-tutorial/ **

```npm install --save redux react-redux```
* redux: gives you a store to keep state in, get state out, and respond to state changes.
* react-redux: connects redux to react components

## Store ##
* Redux keeps the state of your app in a single store. You can extract parts of that state and plug it into components as props.

* *createStore*:
    * ```import { createStore } from 'redux'```
    * ``` const store = createStore() ```

* Store needs a **reducer**
    * Creating a store does not come with a default value or structure. "Redux makes zero assumptions about the shape of your state. It could be an object, or a number, or a string, or whatever you need"
    * Because of this, we have to provide a function that will return the state.
    * ```const store = createStore(reducer) ```
    ```
    function reducer(state, action) {
            console.log('reducer', state, action);
            return state;
    } 
    ```

## Reducer ##
* Takes the current state and an action, and returns the new state
* Reducers reduce actions into a single state (for example, an action of incrementing a counter -> a reducer will return the new state after reducing the action with the current state)

* Give the reducer an **initial state**
    * while the reducer should return a new state, it also needs to return the initial state the first time it's called.
    * we can add a default argument to our reducer: ```state = initialState```

## Actions ##

*Dispatch* **actions** to change the state.

* An action is a plain object with a property called **type**.
* Usually, a type is an uppercase plain string.
* An action object describes a change you want to make - like increment a counter.
* To make an action do a thing, we need to dispatch.

## Dispatch ##

* A redux store has a built-in function called dispatch. Call it with an action, and Redux will call your reducer with that action, and then replace the state with whatever your reducer returned.
* ```store.dispatch({type: 'INCREMENT'})```
* Every call to dispatch results in a call to your reducer!

# Handling Actions #

* To make actions do something, we need to write some code in our reducer that will inspect the incoming 'type' and do something to the state accordingly.
* we can do if/else statements or switch statements
```
function reducer(state = initialState, action) {
  console.log('reducer', state, action);

  switch(action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
}
```

## Keep Reducers Pure ##

* Reducers must be pure functions, this means that they can't modify their arguments and they can't have side effects.

* Don't modify the state argument. Similar to React, do not mutate the state directly in your reducer, you instead want to always return an object that reflects a reduced state based on a given action.

## Connecting Redux and React ##

* **Provider** import and wrap your app with Provider, allowing every component in the app tree to be able to access the Redux store if it wants to.

```
import { Provider } from 'react-redux';

const App = () => (
  <Provider store={store}>
    <Counter/>
  </Provider>
);
``` 
* **Connect**
```
import { connect } from 'react-redux';
function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(Counter);
```
* We are now exporting a connected compontent, that receives the Redux state as a prop.

* Connect is a higher-order function - it returns a function when you call it. It hooks into Redux, pulls out the entire state, and passes is through the mapStateToProps function - mapStateToProps needs to be a custom function because only you know the shape of the state you've stored in Redux.

* mapStateToProps - the object you return from mapStateToProps gets fed into your component as props

## Dispatch Redux Actions in React ##

* Connect also passes the dispatch function from the store as props.

------- END OF REDUX BASICS -------


