import React, { useState } from 'react'
import './Accordion.css'

export default function AccordionItem(props) {
    const {item, index} = props;
    const [isActive, setIsActive] = useState(false);
  return (
    <div className='accordion' key={`item-${index}`} onClick={() => setIsActive(!isActive)}>
        <div className='title'>
        {item.title}  
        </div>
        {isActive && <div className='border' >{item.content}</div>}
       
    </div>
  )
}
