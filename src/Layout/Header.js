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
      sx={{ px: '3%' }}
    >
      <Grid container columnSpacing={2} sx={{ alignItems: 'center' }}>
        <Grid item md={2}>
          <Logo />
        </Grid>
        <Grid item md={9}>
          <Nav />
        </Grid>
        <Grid item md={1}>
          <SideMenu />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Header;
