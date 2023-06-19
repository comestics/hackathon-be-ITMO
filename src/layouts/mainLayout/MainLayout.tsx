import Footer from '../components/footer'
import Header from '../components/header'
import SideBar from '../components/sidebar'

const MainLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className='flex'>
      <SideBar></SideBar>
      <div className='w-full pt-5 pl-6 pr-8 sm:ml-64'>
        <Header></Header>
      </div>
    </div>
  )
}

export default MainLayout
