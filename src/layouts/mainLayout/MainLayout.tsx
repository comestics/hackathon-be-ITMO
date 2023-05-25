import Footer from '@/components/footer'
import Header from '@/components/header/Header'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header></Header>
      {children}
      <Footer></Footer>
    </>
  )
}

export default MainLayout
