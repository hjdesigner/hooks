import React, { useState } from 'react';

const App = () => (
  <div style={{ display: 'flex', justifyContent: 'space-around' }}>
    <CounterClass />
    <CounterFunction />
  </div>
)

class CounterClass extends React.PureComponent {
  state = {
    counter: 0
  }
  render () {
    return (
      <Counter
        counter={this.state.counter}
        inclement={() => {
          this.setState({
            counter: this.state.counter + 1
          })
        }}
        decrement={() => {
          this.setState({
            counter: this.state.counter - 1
          })
        }}
      />
    )
  }
}

function CounterFunction () {
  const [counter, setCounter] = useState(0)

  console.log('counter', counter)

  return (
    <Counter
      counter={counter}
      inclement={() => setCounter(counter + 1)}
      decrement={() => setCounter(counter - 1)}
    />
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
