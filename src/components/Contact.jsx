import React from 'react'
import { IconUser, IconMail, IconPhone, IconInfoCircle, IconPencil } from '@tabler/icons-react';

const Contact = () => {
  return (
    <div>
       <div className='text-center'>
            <h1 className='text-5xl capitalize text-purple-600'>Would you like us to reach out?</h1>
            <h6 className='titlecase text-black text-2xl'>Please fill the form under this titles</h6>
       </div>
       <div className='grid grid-cols-2 gap-5 ml-5 mt-20'>
          <div className='mt-10 text-3xl'>
                <h1 className='uppercase text-purple-600 '>head office: <span className=' text-2xl text-black lowercase'>9a bankole street, magodo phase 1, lagos state.</span></h1>
                <h1 className='uppercase text-purple-600 mt-5'>office phone number: <span className='text-2xl text-black'>08073342278, 08117636279, 08051866667...</span></h1>
                <h1></h1>
          </div>
          <form action="">
            <div className='flex gap-8'>

            <div className='relative flex items-center'>
            <IconUser stroke={2} className="absolute  w-8 h-8 text-gray-500" />
            <input
              type="text"
              name='name'
              id='name'
              className="pl-10 pr-4 py-2 border-2 border-x-0 border-t-0 text-purple-800 outline-0  "
              placeholder="Fullname"
            />
            </div>

            <div className='relative flex items-center'>
            <IconMail stroke={2} className="absolute  w-8 h-8 text-gray-500" />
            <input
              type="email"
              name='mail'
              id='mail'
              className="pl-10 pr-4 py-2 border-2 border-x-0 border-t-0 text-purple-800 outline-0  "
              placeholder="Email"
            />
            </div>

            </div>

            <div className=' gap-8 mt-10  flex '>

            <div className='relative flex items-center'>
            <IconPhone stroke={2} className="absolute  w-8 h-8 text-gray-500" />
            <input
              type="tel"
              name='tel'
              id='tel'
              className="pl-10 pr-4 py-2 border-2 border-x-0 border-t-0 text-purple-800 outline-0  "
              placeholder="phone"
            />
            </div>

            <div className='relative flex items-center'>
            <IconInfoCircle stroke={2} className="absolute  w-8 h-8 text-gray-500" />
            <input
              type="text"
              name='sub'
              id='sub'
              className="pl-10 pr-4 py-2 border-2 border-x-0 border-t-0 text-purple-800 outline-0  "
              placeholder="Subject"
            />
            </div>

            </div>

            <div className="relative flex items-center">
              <IconPencil stroke={2} className="absolute  w-8 h-8 text-gray-500" />
              <textarea
              className=' border-2 border-x-0 border-t-0 px-8 py-4 outline-0 text-purple-800  w-10/11 mt-5'
               name="text"
               id="text"
               placeholder='Feel free to get in touch'
              />
            </div>
            <div>
              <button className='capitalize mt-5 text-black bg-purple-950 px-2 py-2 hover:bg-black hover:text-purple-950 text-lg rounded-4xl'>get in touch</button>
            </div>

          </form>
       </div>
    </div>
  )
};

export default Contact