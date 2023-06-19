import Image from 'next/image'
import React from 'react'

const SideBar = () => {
  const linkSideBar = [
    { title: 'Главная', link: '/home', icon: '/home.svg' },
    { title: 'Расписание', link: '/home', icon: '/schedule.svg' },
    { title: 'Учебный план', link: '/home', icon: '/adviser.svg' },
    {
      title: 'Запись по выбору',
      link: '/home',
      // children: [
      //   { title: 'Дашборд', link: '/home' },
      //   { title: 'Ментальная помощь', link: '/home' }
      // ],
      icon: '/menu-file.svg'
    },
    {
      title: 'Спорт',
      link: '/home',
      // children: [
      //   { title: 'Дашборд', link: '/home' },
      //   { title: 'Ментальная помощь', link: '/home' }
      // ]
      icon: '/kronbar.svg'
    },
    {
      title: 'Состояние',
      link: '/home',
      children: [
        { title: 'Дашборд', link: '/home' },
        { title: 'Ментальная помощь', link: '/home' }
      ],
      icon: '/sticker.svg'
    },
    { title: 'Финансы', link: '/home', icon: '/wallet.svg' },
    { title: 'Персоналии', link: '/home', icon: '/users.svg' },
    { title: 'Зачётка', link: '/home', icon: '/notebook.svg' },
    { title: 'Заявки', link: '/home', icon: '/menu-note.svg' },
    { title: 'Сервисы', link: '/home', icon: '/services.svg' }
  ]

  return (
    <>
      <button
        data-drawer-target='default-sidebar'
        data-drawer-toggle='default-sidebar'
        aria-controls='default-sidebar'
        type='button'
        className='inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
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

      <aside
        id='default-sidebar'
        className='fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0  border-solid border-r-[1px] border-r-gray-100 text-gray-gray80'
        aria-label='Sidebar'
      >
        <div className='h-full py-5 overflow-y-auto bg-white '>
          <div className='flex items-center justify-start cursor-pointer px-7 '>
            <Image src='/logo.svg' alt='' width={160} height={60}></Image>
          </div>
          <div className='p-[3px] border border-solid rounded-full border-1 border-gray-100 w-fit absolute right-0 translate-x-1/2 bg-white hover:bg-gray-gray4 cursor-pointer'>
            <Image src='/arrow-left.svg' alt='' width={25} height={25}></Image>
          </div>
          <ul className='px-5 mt-6 space-y-2 font-medium'>
            {linkSideBar.map((itemLink, index) => (
              <li className='p-2 rounded-md hover:bg-gray-gray4' key={index}>
                <a href='#' className='flex items-center text-gray-900 rounded-lg '>
                  <Image src={itemLink.icon} alt='' width={25} height={25}></Image>

                  <span className='ml-3 text-base text-gray-gray80'>{itemLink.title}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  )
}

export default SideBar
