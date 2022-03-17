//Packages
import { Box } from '@mui/material';
import Link from 'next/link';

//Logo
import Logos from 'Assets/Logo-za-footer-282x58.png';

//Style
import styles from 'Styles/Footer/Footer.style';

const Footer = () => {
  return (
    <Box sx={styles.Logo}>
      <Link href="/" passHref>
        <a>
          <Box component="img" src={Logos} alt="Logo" />
        </a>
      </Link>
    </Box>
  );
};

export default Footer;
