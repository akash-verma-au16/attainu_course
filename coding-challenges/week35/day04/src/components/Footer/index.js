import { Link } from 'react-router-dom';
import { PATHS } from '../../config';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3">
      <div className="text-center">
        Copyright&copy;  All Rights Reserved
        <p>Powred by <Link to={PATHS.HOME} className="text-black">Subramanyam</Link></p>
      </div>
    </footer>
  )
};

export default Footer;
