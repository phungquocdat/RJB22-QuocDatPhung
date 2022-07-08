import React from 'react'

export default function Header(props) {
    const {color} = props
  return (
    <>
    <p className="blue">header {color}</p>
    </>
  )
}
