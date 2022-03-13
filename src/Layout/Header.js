//packages
import { Box, Container, Grid } from '@mui/material';

//Component
import Logo from 'Components/Header/Logo';
import Nav from 'Components/Header/Nav';
import SideMenu from 'Components/Header/SideMenu';

const Header = ({ activePage }) => {
  return (
    <Container
      maxWidth={false}
      disableGutters
      component="header"
      sx={{ p: '10px 3%' }}
    >
      <Grid container columnSpacing={2} sx={{ alignItems: 'center' }}>
        <Grid item md={2} sx={{ textAlign: 'left' }}>
          <Logo />
        </Grid>
        <Grid item md={9} sx={{ textAlign: 'right' }}>
          <Nav />
        </Grid>
        <Grid item md={1} sx={{ textAlign: 'right' }} className="FAizanArif">
          <SideMenu />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;
