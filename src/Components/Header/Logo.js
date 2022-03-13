//Packages
import { Box } from '@mui/material';
import Link from 'next/link';

//Logo
import Logos from 'Assets/logo-img1.png';

//Styles
import styles from 'Styles/Header/Logo.style';

const Logo = () => {
  return (
    <Box sx={styles.Logo}>
      <Link href="/" passHref>
        <a>
          <Box component="img" src={Logos} alt="Logo" width="100%" />
        </a>
      </Link>
    </Box>
  );
};

export default Logo;
