import React from 'react'
import img from './1.jpg'
import './UI1.css'

export default function UI1() {
  return (
    <>
    <div className='box-border'>
      <img className='float-left' src={img} alt=''></img>
      <div className='float-right textUI1'>
        <h2>Clothing & Apparel </h2>
        <div>
          <p>Accessories </p>
          <p>Bags </p>  
          <p>Kid's Fashion</p> 
          <p>Mens</p> 
        </div>
      </div>
    </div>
    </>
  )
}
