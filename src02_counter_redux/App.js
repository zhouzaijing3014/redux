import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { increment, decrement } from './redux/actions'

/*
应用根组件
 */
class App extends Component {

  static propTypes = {
    store: PropTypes.object.isRequired
  }

  increment = () => {
    const number = this.refs.numberSelect.value * 1
    this.props.store.dispatch(increment(number))
  }
  decrement = () => {
    const number = this.refs.numberSelect.value * 1
    this.props.store.dispatch(decrement(number))
  }
  incrementIfOdd = () => {
    const number = this.refs.numberSelect.value * 1
    const count = this.props.store.getState()
    if (count%2===1) {
     this.props.store.dispatch(increment(number))
    }
    
  }
  incrementAsync = () => {
    const number = this.refs.numberSelect.value * 1
    setTimeout(() => {
      this.props.store.dispatch(increment(number))
    }, 1000);
  }

  render() {
    console.log('App render()')
    const count = this.props.store.getState()
    return (
     <div>
       <p>click {count} times</p>
       <select ref="numberSelect">
         <option value="1">1</option>
         <option value="2">2</option>
         <option value="3">3</option>
       </select> &nbsp;
       <button onClick={this.increment}>+</button>&nbsp;
       <button onClick={this.decrement}>-</button>&nbsp;
       <button onClick={this.incrementIfOdd}>increment if odd</button>&nbsp;
       <button onClick={this.incrementAsync}>increment async</button>
     </div>
    )
  }
}

export default App
