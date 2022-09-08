import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='w-full md:h-screen bg-[#f5f5f5] pl-8 border-t-2 md:flex justify-around items-center border-black'>
        <div>
        <h1 className='font-bold text-5xl mt-32 mx-auto'>Know me more</h1>  
        <p className='text-[18px] mb-6 mx-auto'>You can shoot me an email here <br/> Drop me a LinkedIn Profile and let's connect!</p>  
        </div>
        
        <form method="POST" action="https://getform.io/f/12b9a504-20dc-4b74-a2b6-71e370450b63" className='flex flex-col md:max-w-[600px] max-w-[600px] w-full'>
            <div className='pb-4'>
            </div>
            <input className="bg-[#ccd6f6] md:p-2 md:mx-24 p-2 mx-6" type="text" placeholder="Name" name="name" id="" />
            <input className="md:my-4 md:p-2 md:mx-24 p-2 my-1 mx-6 bg-[#ccd6f6]" type="email" placeholder="Email" name="email" id="" />
            <textarea className="md:p-2 md:mx-24 p-2 mb-1 mx-6 bg-[#ccd6f6]" type="message" rows="10" placeholder="Message" name="message" id="" ></textarea>
            <button className='bg-[#303c6c] text-white md:py-2 md:mt-4 md:mx-24 py-2 mt-2 mx-24 mb-4'>Get in touch!</button>
        </form>


        </div>
  )
}

export default Contact