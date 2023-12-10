import React from 'react'

function Button(props) {
  return (
    <div className='signinbtn px-8 w-[100px]'>
      <button>{props.item}</button>
    </div>
  )
}
export default  Button
