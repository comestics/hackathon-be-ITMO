import Footer from '../components/footer'
import Header from '../components/header'
import SideBar from '../components/sidebar'

const MainLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <>
      <SideBar></SideBar>
    </>
  )
}

export default MainLayout
