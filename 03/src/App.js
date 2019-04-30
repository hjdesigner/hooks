import React, { useState } from 'react';

const App = () => (
  <div style={{ display: 'flex', justifyContent: 'space-around' }}>
    <CounterClass />
    <CounterFunction />
  </div>
)

class CounterClass extends React.PureComponent {
  state = {
    counter: 0,
    toggle: false,
  }
  render () {
    return (
      <>
        <Counter
          counter={this.state.counter}
          inclement={() => {
            this.setState((prevState) => ({
              counter: prevState.counter + 1
           }))
         }}
          decrement={() => {
            this.setState((prevState) => ({
              counter: prevState.counter - 1
           }))
         }}
       />
       {this.state.toggle && <h1>Visivel</h1>}
       <button onClick={() => {
        this.setState((prevState) => ({
          toggle: !prevState.toggle,
        }))
       }}>Toggle</button>
      </>
    )
  }
}

function CounterFunction () {
  const [counter, setCounter] = useState(0)
  const [toggle, setToggle] = useState(false)

  return (
    <>
      <Counter
        counter={counter}
        inclement={() => setCounter(c => c + 1)}
        decrement={() => setCounter(c => c - 1)}
      />
      {toggle && <h1>Visivel</h1>}
       <button onClick={() => setToggle(!toggle)}>Toggle</button>
    </>
  )
}

const Counter = ({ counter, inclement, decrement }) => (
  <div style={{ textAlign:'center' }}>
    <h1>{ counter }</h1>
    <button onClick={decrement}>-</button>
    <button onClick={inclement}>+</button>
  </div>
)

export default App;
