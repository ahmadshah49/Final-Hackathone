import Image from 'next/image'
import Hero from './components/Hero'
import Section1 from './components/Section1'
import OurDoctors from './components/OurDoctors'
import ButtonDark from './components/ButtonDark'

export default function Home() {
  return (
    <>
      <Hero title=" We help people to
                    get appointment
                    in online"/>
      <Section1 />
      <h1 className="py-24 text-4xl font-bold text-center">
        OurDoctors
      </h1>
      <div className='w-[70%] mx-auto grid md:grid-cols-2 lg:grid-cols-3'>

        <OurDoctors />
        <OurDoctors />
        <OurDoctors />
        <OurDoctors />
        <OurDoctors />
        <OurDoctors />
        <OurDoctors />

      </div>
      <div className='flex justify-center items-center flex-col'>
      <h1 className="py-24 text-4xl font-bold text-center">
                Send Us A Message
            </h1>
        <div className='grid lg:grid-cols-2 w-[60%] gap-4'>
<input className='py-8 px-6 outline-none border w-[100%]' type="text" placeholder='FirstName' />
<input className='py-8 px-6 outline-none border w-[100%]' type="text" placeholder='LastName' />
<input className='py-8 px-6 outline-none border w-[100%]' type="number" placeholder='Mobile Number' />
<input className='py-8 px-6 outline-none border w-[100%]'type="Email" placeholder='Email' />
<div >
  <ButtonDark title="Send Message"/>
</div>
        </div>
      </div>
    </>
  )
}
