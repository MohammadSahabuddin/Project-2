//Packages
import { Box, Container, Typography } from '@mui/material';
import Link from 'next/link';

//Component
import Logo from 'Components/Footer/Logo';
import Texts from 'Components/Footer/Texts';
import Icons from 'Components/Footer/Icons';
import Copyright from 'Components/Footer/Copyright';

const Footer = () => {
  return (
    <Container
      maxWidth={false}
      disableGutters
      component="footer"
      sx={{ bgcolor: 'red' }}
    >
      <Logo />
      <Texts />
      <Icons />
      <Copyright />
    </Container>
  );
};

export default Footer;
