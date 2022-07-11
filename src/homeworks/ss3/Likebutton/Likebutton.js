import React, { Component } from 'react';
import {AiOutlineLike} from  "react-icons/ai";
import {AiFillLike} from  "react-icons/ai";

export default class Likebutton extends Component {
    constructor(props){
        super(props);
        this.state = {
            icon: true
        }
    }
  render() {
    return (
      <div>
        {this.state.icon &&
            <AiOutlineLike style={{fontSize:'50px'}} onClick={()=>{this.setState({icon: false})}}/> 
        }

        {!this.state.icon &&
            <AiFillLike style={{fontSize:'50px'}} onClick={()=>{this.setState({icon: true})}}/>
        }    
      </div>
    )
  }
}
