import React from 'react'
import img from './2.jpg'
import {AiFillStar} from "react-icons/ai";
import {AiOutlineStar} from "react-icons/ai";
import './UI2.css'

export default function UI2() {
  return (
    <>
    <div className='box-border2'>
        <img src={img} alt=''></img>
        <div className='textUI2'>
            <h4 >Young shop</h4>
            <hr/>
            <div className='text-blue'>Samsung UHD TV 24inch</div>
            <div><span className='yellow'><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></span><AiOutlineStar/> 02</div>
            <div><b>$599</b></div>
        </div>
    </div>
    </>
  )
}
