import React from 'react'
import Button from '../components/button/page'
import ButtonDark from '../components/ButtonDark'

export default function page() {
  return (
    <div className='main'>
    <div className='left'>
      <h1 className='font-bold text-4xl py-4'>Sign Up</h1>
      <h2>Please Sign Up To Continue</h2>
      <p className='signinpera'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit culpa sit ni
        si, earum expedita harum voluptate pariatur fugit moles</p>

      <form>
        <input className='mb-8' type="text" placeholder='First Name' /><br />
        <input className='mb-8' type="text" placeholder='Last Name' /><br />
        <input  className='mb-8 ' type="email" placeholder='Email' />
        
        <div className='localbtn'><ButtonDark title="Sign Up"/></div>
      </form>
    </div>
    <div className='right'>
   
     <div className='btn'>
     <a href="/patient"><Button item="Patient"/></a>
      <Button item="Doctor"/>
      <Button item="Admin"/>
     </div>
        <input type="pnone" placeholder='Phone Number' /><br />
        <input type="date" placeholder='Dob' /><br />
        <input type="password" placeholder='Password' /><br />
        <input type="password" placeholder='Confirm Password' />
    </div>
  </div>
  )
}
