import { connect } from 'react-redux'

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

function Counter(props) {
  const increment = () => {
    props.dispatch({type: 'INCREMENT'})
  };

  const decrement = () => {
    props.dispatch({type: 'DECREMENT'})
  };

  const reset = () => {
    props.dispatch({type: 'RESET'})
  }

  return (
    <div className="counter">
      <h2>Counter</h2>
      <div>
        <button onClick={decrement}>-</button>
        <span>{props.count}</span>
        <button onClick={increment}>+</button>
        <button onClick={reset}>0</button>
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(Counter);