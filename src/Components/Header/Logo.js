//Packages
import { Box } from '@mui/material';
import Link from 'next/link';

//Logo
import Logos from 'Assets/logo-img1.png';

const Logo = () => {
  return (
    <Box>
      <Link href="/" passHref>
        <a>
          <Box component="img" src={Logos} alt="Logo" width="100%" />
        </a>
      </Link>
    </Box>
  );
};

export default Logo;
