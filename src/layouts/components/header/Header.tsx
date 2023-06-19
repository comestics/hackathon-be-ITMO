import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <header className='flex items-center'>
      <h1 className='text-3xl font-bold leading-10'>Дашборд</h1>
      <div className='flex items-center gap-4 ml-auto'>
        <div className='p-3 rounded cursor-pointer hover:bg-gray-gray12'>
          <svg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M15.5 14.5L12.7 11.7C14.9 8.90002 14.8 4.90002 12.2 2.30002C9.5 -0.399976 5 -0.399976 2.3 2.30002C-0.399998 5.00002 -0.399998 9.50002 2.3 12.2C4.9 14.8 8.9 14.9 11.7 12.7L14.5 15.5C14.8 15.8 15.3 15.8 15.6 15.5C15.8 15.2 15.8 14.8 15.5 14.5ZM3.4 11.2C1.2 9.00002 1.2 5.50002 3.4 3.40002C5.6 1.30002 9.1 1.20002 11.2 3.40002C13.3 5.50002 13.4 9.00002 11.3 11.2C11.3 11.2 11.3 11.2 11.2 11.3C11.2 11.3 11.2 11.3 11.1 11.4C9 13.3 5.5 13.3 3.4 11.2Z'
              fill='#5C5C5C'
            />
          </svg>
        </div>
        <div className='h-4 w-[1px] bg-gray-gray40'></div>

        <div className='flex items-center gap-2 cursor-pointer ml-7'>
          <div className='border-2 border-solid rounded-full border-primary-blue '>
            <Image
              src='https://source.unsplash.com/random'
              alt=''
              fill
              className='object-cover rounded-full !relative !w-[35px] !h-[35px] p-[1px]'
            ></Image>
          </div>

          <div className='flex flex-col gap-2'>
            <p className='text-black'>Киселёва П.С.</p>
            <span className='text-gray-gray40'>284258</span>
          </div>

          <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M18.5303 8.46967C18.8232 8.76256 18.8232 9.23744 18.5303 9.53033L12.5303 15.5303C12.2374 15.8232 11.7626 15.8232 11.4697 15.5303L5.46967 9.53033C5.17678 9.23744 5.17678 8.76256 5.46967 8.46967C5.76256 8.17678 6.23744 8.17678 6.53033 8.46967L12 13.9393L17.4697 8.46967C17.7626 8.17678 18.2374 8.17678 18.5303 8.46967Z'
              fill='#5C5C5C'
            />
          </svg>
          <div className='h-4 w-[1px] bg-gray-gray40'></div>
        </div>

        <Image
          src='https://source.unsplash.com/random'
          alt=''
          fill
          className='object-cover rounded-full !relative !w-[35px] !h-[35px] cursor-pointer'
        ></Image>
      </div>
    </header>
  )
}

export default Header
