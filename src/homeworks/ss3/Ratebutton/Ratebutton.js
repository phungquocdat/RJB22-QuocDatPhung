import React, { Component } from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
const MAX_STAR = 5

export default class Ratebutton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            star : 0
        }
    }
    setStar = (value) => {
        this.setState({
          star: value,
        });
    }   
    renderStar(star) {
        let result = []
        for (let index=0; index < star; index++) {
            result.push(<span onClick={this.setStar.bind(this, index + 1)}><AiFillStar style={{color:'yellow', fontSize:'50px'}}/></span>)
        }
        for (let index= star; index < MAX_STAR; index++) {
            result.push(<span onClick={this.setStar.bind(this, index + 1)}><AiOutlineStar style={{fontSize:'50px'}}/></span>)
        }
        return result;
    }

  render() {
    return (
      <div>
        <p>{this.renderStar(this.state.star)}</p>
      </div>
    )
  }
}