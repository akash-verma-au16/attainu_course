import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

const Layout = ({ children }) => {
  return (
    <div className='d-flex flex-column' style={{ height: '100vh' }}>
      <div className='flex-grow-1'>
        <Menu />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
