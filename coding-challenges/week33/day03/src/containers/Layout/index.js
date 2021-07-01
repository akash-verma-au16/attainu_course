import Menu from '../../components/Menu';

const Layout = ({children}) => {
  return (
    <>
      <Menu />
      {children}
    </>
  )
};

export default Layout;
