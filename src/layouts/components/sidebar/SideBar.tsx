'use client'
import path from '@/constants/path'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useState, useEffect } from 'react'

const SideBar = () => {
  const linkSideBar = [
    { title: 'Главная', link: '/', icon: '/home.svg' },
    { title: 'Расписание', link: '/', icon: '/schedule.svg' },
    { title: 'Учебный план', link: '/', icon: '/adviser.svg' },
    {
      title: 'Запись по выбору',
      link: '/',
      // children: [
      //   { title: 'Дашборд', link: '/home' },
      //   { title: 'Ментальная помощь', link: '/home' }
      // ],
      icon: '/menu-file.svg'
    },
    {
      title: 'Спорт',
      link: '/',
      // children: [
      //   { title: 'Дашборд', link: '/home' },
      //   { title: 'Ментальная помощь', link: '/home' }
      // ]
      icon: '/kronbar.svg'
    },
    {
      title: 'Состояние',
      link: path.state,
      children: [
        { title: 'Дашборд', link: '/' },
        { title: 'Ментальная помощь', link: '/' }
      ],
      icon: '/sticker.svg'
    },
    { title: 'Финансы', link: '/', icon: '/wallet.svg' },
    { title: 'Персоналии', link: '/', icon: '/users.svg' },
    { title: 'Зачётка', link: '/', icon: '/notebook.svg' },
    { title: 'Заявки', link: '/', icon: '/menu-note.svg' },
    { title: 'Сервисы', link: '/', icon: '/services.svg' }
  ]

  const [toggle, setToggle] = useState(false)
  const [isHidden, setIsHidden] = useState(true)
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 1024) {
        setToggle(false)
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <>
      <button
        onClick={() => setIsHidden((prev) => !prev)}
        data-drawer-target='default-sidebar'
        data-drawer-toggle='default-sidebar'
        aria-controls='default-sidebar'
        type='button'
        className='inline-flex items-center p-2 mt-4 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-200 dark:hover:text-white dark:focus:ring-gray-600'
      >
        {/* <span className='sr-only'>Open sidebar</span> */}
        <svg
          className='w-6 h-6'
          aria-hidden='true'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            clipRule='evenodd'
            fillRule='evenodd'
            d='M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z'
          ></path>
        </svg>
      </button>
      <div
        onClick={() => setIsHidden((prev) => !prev)}
        className={`${!isHidden && 'lg:hidden fixed inset-0 bg-gray-500 bg-opacity-70 opacity-100 z-30'}`}
      ></div>
      <aside
        id='default-sidebar'
        className={`${toggle ? 'w-[4.8rem]' : ''} fixed top-0 left-0 z-40 w-64 h-screen ${
          isHidden && '-translate-x-full'
        } lg:translate-x-0 transition-all duration-500 border-solid border-r-[1px] border-r-gray-100 text-gray-gray80`}
        aria-label='Sidebar'
      >
        <div className='h-full py-5 bg-white'>
          <div
            className={`${toggle ? 'w-[4.8rem]' : ''} flex items-center gap-1 justify-center cursor-pointer px-4 w-64`}
          >
            {/* <Image src={`/my.svg`} className={`${toggle ? 'hidden' : ''}`} alt='' width={80} height={30}></Image>
            <Image src={`/short_logo.svg`} alt='' width={160} height={60}></Image>
            <Image src={`/itmo.svg`} className={`${toggle ? 'hidden' : ''}`} alt='' width={160} height={60}></Image> */}
            <Image src={`${toggle ? '/short_logo.svg' : '/logo.svg'}`} alt='' width={160} height={60}></Image>
          </div>
          <div
            className='hidden lg:block p-[3px] border border-solid rounded-full border-1 border-gray-100 w-fit absolute right-0 translate-x-1/2 bg-white hover:bg-gray-gray4 cursor-pointer'
            onClick={() => {
              setToggle(!toggle)
            }}
          >
            <Image
              src='/arrow-left.svg'
              className={`${toggle ? 'rotate-180' : ''}`}
              alt=''
              width={25}
              height={25}
            ></Image>
          </div>
          <ul className='px-5 mt-6 space-y-2 font-medium'>
            {linkSideBar.map((itemLink, index) => (
              <li className={`${toggle ? 'w-[3.6rem]' : 'w-[14rem]'} p-2 rounded-md hover:bg-gray-gray4`} key={index}>
                <Link href={itemLink.link} className='flex items-center text-gray-900 rounded-lg '>
                  <Image src={itemLink.icon} alt='' width={25} height={25}></Image>

                  <span className={`${toggle ? 'hidden' : ''} ml-3 text-base text-gray-gray80`}>{itemLink.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  )
}

export default SideBar
