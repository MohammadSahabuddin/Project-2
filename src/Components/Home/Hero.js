//Packages
import { Box, ButtonBase, Container, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import Image from 'Assets/h1-img-1.png';

const Hero = () => {
  return (
    <Container maxWidth={false} disableGutters component="section">
      <Grid container spacing={2}>
        <Grid item md={7}>
          <Typography variant="h1" component="h1">
            Creative agency
          </Typography>
          <Typography variant="body1" component="p">
            Lorem ipsum dolor sit amat, consenter adipisicing elite, sed do
            elusion tempore incident ut laborer et dolores magna aliquant.
          </Typography>
          <Link href="/">
            <a>
              <ButtonBase>Read More</ButtonBase>
            </a>
          </Link>
        </Grid>
        <Grid item md={5}>
          <Box component="img" src={Image} alt="Logo" width="100%" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Hero;
