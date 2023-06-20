'use client'
import { Listbox, Transition, Menu } from '@headlessui/react'
// import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { Fragment, useState } from 'react'
const languages = [
  { name: 'русский', icon: '/flag-russia.png' },
  { name: 'english', icon: '/flag-england.svg' }
]
const navbar = [
  { name: 'Настройки профиля', icon: '/user-edit.svg' },
  { name: 'Выход', icon: '/logout.svg' }
]
interface Props {
  heading?: string
}

const Header = (props: Props) => {
  const { heading } = props
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0])

  return (
    <header className='flex items-center'>
      <h1 className='text-3xl font-bold leading-10'>{heading}</h1>
      <div className='flex items-center gap-4 ml-auto'>
        <div className='p-3 rounded cursor-pointer hover:bg-gray-gray12'>
          <Image src='/search.svg' alt='' width={16} height={16}></Image>
        </div>
        <div className='h-4 w-[1px] bg-gray-gray40'></div>

        <Menu as='div' className='relative inline-block text-left '>
          <div>
            <Menu.Button className='relative inline-flex justify-center w-full '>
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
            </Menu.Button>
          </div>

          <Transition as={Fragment} leave='transition ease-in duration-100' leaveFrom='opacity-100' leaveTo='opacity-0'>
            <Menu.Items className='absolute right-0 z-10 mt-4 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none '>
              <div className='flex flex-col py-1'>
                {navbar.map((item, index) => (
                  <Menu.Item key={index}>
                    {({ active }) => (
                      <div className='flex items-start gap-2 p-2 cursor-pointer hover:bg-gray-gray4'>
                        <Image
                          className='!relative !w-6 !h-6  rounded-full flex-shrink-0'
                          src={item.icon}
                          alt=''
                          fill
                          sizes='100%'
                        />

                        <div className='ml-2 leading-5 truncate'>
                          <span className='block text-sm font-normal truncate'>{item.name}</span>
                        </div>
                      </div>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>

        {/* <Image
          src='https://source.unsplash.com/random'
          alt=''
          fill
          className='object-cover rounded-full !relative !w-[35px] !h-[35px] cursor-pointer'
        ></Image> */}

        <Listbox value={selectedLanguage} onChange={setSelectedLanguage}>
          <div className='relative mt-1'>
            <Listbox.Button className='relative w-full cursor-pointer focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm'>
              <Image
                src={selectedLanguage.icon}
                alt=''
                fill
                className='object-cover rounded-full !relative !w-[35px] !h-[35px] p-[1px]'
              ></Image>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave='transition ease-in duration-100'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Listbox.Options className='absolute w-auto py-1 mt-3 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm -translate-x-[90%]'>
                {languages.map((language, personIdx) => (
                  <Listbox.Option
                    key={personIdx}
                    className={({ active }) =>
                      `relative cursor-pointer select-none pl-3 py-2 pr-12  ${active ? 'bg-gray-gray4' : 'bg-white'}`
                    }
                    value={language}
                  >
                    {({ selected }) => (
                      <div className='flex items-center gap-4'>
                        <div className='rounded-full h-7 w-7'>
                          <Image
                            src={language.icon}
                            fill
                            sizes='100%'
                            alt=''
                            className='!relative object-cover rounded-full'
                          ></Image>
                        </div>
                        <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                          {language.name}
                        </span>
                        {/* {selected ? (
                            <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600'>
                              <Image src='/arrow-left.svg' alt='' width={16} height={16}></Image>
                            </span>
                          ) : null} */}
                      </div>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
    </header>
  )
}

export default Header
