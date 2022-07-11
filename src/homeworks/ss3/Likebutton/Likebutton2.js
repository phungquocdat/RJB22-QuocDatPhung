import React, { Component } from 'react';
import {AiOutlineLike} from  "react-icons/ai";
import {AiFillLike} from  "react-icons/ai";

export default class Likebutton2 extends Component {
    constructor(props){
        super(props);
        this.state = {
            like: false
        }
    }
    setLike= () => {
        this.setState({
            like: !this.state.like
        })
    }
  render() {
    return (
      <div>
        <div onClick={this.setLike}>
            {this.state.like ? <AiFillLike/> : <AiOutlineLike/>}
        </div>
      </div>
    )
  }
}