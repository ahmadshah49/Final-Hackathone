import Link from 'next/link'
import React from 'react'

const ButtonDark = (props) => {
  return (
    <div className='bg-[#8e81cb] w-fit cursor-pointer text-white rounded-xl shadow-md font-bold px-6 py-2 '>{props.title}<Link href={"/signup"}></Link></div>
  )
}

export default ButtonDark