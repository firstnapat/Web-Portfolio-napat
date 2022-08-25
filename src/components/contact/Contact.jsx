import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#f5f5f5] flex justify-around items-center pl-32  border-t-2 border-black'>
        <div>
        <h1 className='font-bold text-5xl'>Know me more</h1>  
        <p className='text-[18px]'>You can shoot me an email here <br/> Drop me a LinkedIn Profile and let's connect!</p>  
        </div>
        
        <form method="POST" action="https://getform.io/f/12b9a504-20dc-4b74-a2b6-71e370450b63" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                
            </div>
            <input className="bg-[#ccd6f6] p-2 mx-24" type="text" placeholder="Name" name="name" id="" />
            <input className="my-4 p-2 mx-24 bg-[#ccd6f6]" type="email" placeholder="Email" name="email" id="" />
            <textarea className="p-2 mx-24 bg-[#ccd6f6]" type="message" rows="10" placeholder="Message" name="message" id="" ></textarea>
            <button className='bg-[#303c6c] text-white py-2 mt-4 mx-24 '>Get in touch!</button>
        </form>


        </div>
  )
}

export default Contact