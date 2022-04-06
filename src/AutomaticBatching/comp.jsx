import React, { Component } from 'react'
import {flushSync} from 'react-dom'

export default class comp extends Component {
    constructor(props){
        super(props)
        this.state = {
            count:0
        }
    }
    changeCount = () => {
        const { count } = this.state;
    
        flushSync(() => {
          this.setState({
            count: count + 1,
          });
        });
    
        console.log("***********countChanged************", this.state.count);
      };

  render() {
    return (<>
      <div>{this.state.count}</div>
      <button onClick={this.changeCount}>合成事件</button></>
    )
  }
}
