import React, { Component } from 'react'

export default class Accordions extends Component {
    constructor(props){
        super(props);
        this.state = {
            content : "",
            content1 : "",
            content2 : "",
        }

    }
  render() {
    return (
        <div className='row'>
            <div className='col-6'>
            
                <button className='col-12' onClick={() => this.setState({content : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'})}>SIMPLE PANNEL</button>
                <div>
                {this.state.content}
                </div>
                <button className='col-12' onClick={() => this.setState({content1 : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})}>TOGGLE INFORMATION</button>
                <div>
                {this.state.content1}
                </div>
                <button className='col-12' onClick={() => this.setState({content2 : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})}>NICE TOUCH</button>
                <div>
                {this.state.content2}
                </div>
            </div>
      </div>
    )
  }
}
