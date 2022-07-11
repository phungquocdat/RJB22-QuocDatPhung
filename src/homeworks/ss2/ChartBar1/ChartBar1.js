import React from 'react'
import './ChartBar1.css'

export default function ChartBar1(props) {
    const {text, color1, color2, percentage}=props
  return (
    <>
    <div className='display_flex'>
        
        <div className={`background-${color1}`}>{text}</div>
        <div className={`background-${color2}`}>{percentage}%</div>       
        
    </div>
    </>
  )
}
