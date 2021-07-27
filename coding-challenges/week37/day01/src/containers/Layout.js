import Footer from '../components/Footer';
import AppNav from '../components/AppNav';

const Layout = ({ children }) => {
  return (
    <div className='d-flex flex-column'>
      <div style={{ minHeight: '90vh' }}>
        <AppNav />
        <main>
          <div>{children}</div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
