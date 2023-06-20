'use client'
import MainLayout from '@/layouts/mainLayout'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Home() {
  // const router = usePathname()
  // console.log(router)
  return <MainLayout heading='Дашборд'></MainLayout>
}
