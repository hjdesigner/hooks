import React, { useState, useEffect } from 'react';

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
  
  componentDidMount () {
    this.updateComponentTitle();
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevState.counter !== this.state.counter) {
      this.updateComponentTitle();
    }
  }

  updateComponentTitle() {
    document.title = `CounterClass: ${this.state.counter}`
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
         {this.state.toggle && <h1>Toggle</h1>}
         <button onClick={() => this.setState({
          toggle: !this.state.toggle
          })}>Toggle</button>
      </>
    )
  }
}

/* function useCounter () {
  const [counter, setCounter] = useState(0)
  useEffect(() => {
    document.title = `CounterFunction: ${counter}`
  }, [counter]);
  return [counter, setCounter];
}

function useDidMount (callback) {
  useEffect(callback, []);
} */

function CounterFunction () {

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('executou useEffect');
    document.title = `CounterFunction: ${counter}`
    
    const timer = setInterval(() => {
      setCounter((counter) => counter + 1);
    }, 1000);

    return () => {
      console.log('limpou useEfect')
      clearInterval(timer)
    }
  }, [counter])
  
  return (
    <Counter
      counter={counter}
      inclement={() => setCounter(counter => counter + 1)}
      decrement={() => setCounter(counter => counter - 1)}
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
