import { useReducer, createContext, useContext } from "react";

const initialState = {
  count: 0,
};

//define the reducer function to handle state transitions

const reducer = (state, action) => {
  if (action.type === "INCREMENT") {
    return {
      ...state,
      count: state.count + 1,
    };
  } else if (action.type === "DECREMENT") {
    return {
      ...state,
      count: state.count - 1,
    };
  } else {
    return state;
  }
};

//crreate context

const CounterContext = createContext();

const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);  
  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

const Counter = () => {
  const { state, dispatch } = useContext(CounterContext);

  return (
    <div className="counter-container">
      <h1>Counter: {state.count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
    </div>
  );
};

const Counter2 = () => {
  const { state, dispatch } = useContext(CounterContext);
  return (
    <>
      <h1>Counter 1 Component {state.count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT  " })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </>
  );
};

const App = () => {
  return (
    <div className="app-container">
      <h1 className="title"> React Counter</h1>
      <p className="sub-description">A simple counter app using context API</p>

      <CounterProvider>
        <Counter2 />
        <Counter />
      </CounterProvider>
    </div>
  );
};

export default App;
