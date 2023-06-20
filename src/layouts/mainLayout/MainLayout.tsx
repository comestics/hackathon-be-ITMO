import Footer from '../components/footer'
import Header from '../components/header'
import SideBar from '../components/sidebar'
interface Props {
  children?: React.ReactNode
  heading?: string
}

const MainLayout = (props: Props) => {
  const { children, heading } = props
  return (
    <div className='flex'>
      <SideBar></SideBar>
      <div className='w-full pt-5 pl-6 pr-8 sm:ml-64'>
        <Header heading={heading}></Header>
      </div>
    </div>
  )
}

export default MainLayout
