//Packages
import { Box, Container } from '@mui/material';

//Component
import Logo from 'Components/Footer/Logo';
import Texts from 'Components/Footer/Texts';
import Icons from 'Components/Footer/Icons';
import Copyright from 'Components/Footer/Copyright';

//Style
import styles from 'Styles/Footer/Footer.style';

const Footer = () => {
  return (
    <Container
      maxWidth={false}
      disableGutters
      component="footer"
      sx={styles.Footer}
    >
      <Box sx={styles.Wrapper}>
        <Logo />
        <Texts />
        <Icons />
        <Copyright />
      </Box>
    </Container>
  );
};

export default Footer;
