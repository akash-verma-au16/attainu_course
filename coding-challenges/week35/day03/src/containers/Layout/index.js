import Footer from '../../components/Footer';
import AppNav from '../../components/AppNav';
const Layout = ({children}) => {
  return (
    <>
      <AppNav />
      <main className="flex-shrink-0">
        <div className="container">
          {children}
        </div>
      </main>
      <Footer />
    </>
  )
};

export default Layout;
