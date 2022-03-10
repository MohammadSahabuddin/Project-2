//Packages
import { Box } from '@mui/material';
import Link from 'next/link';

//Logo
import Logos from 'Assets/Logo-za-footer-282x58.png';

const Footer = () => {
  return (
    <Box>
      <Link href="/" passHref>
        <a>
          <Box component="img" src={Logos} alt="Logo" width="10%" />
        </a>
      </Link>
    </Box>
  );
};

export default Footer;
