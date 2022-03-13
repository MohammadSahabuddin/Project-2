//Packages
import { Box, ButtonBase, Container, Grid, Typography } from '@mui/material';
import Link from 'next/link';
//Image
import Image from 'Assets/h1-img-1.png';

//Style
import styles from 'Styles/Hero/Hero.style';

//Component
import HeroSvg from 'Components/Backgrounds/Hero.svg';

const Hero = () => {
  return (
    <Container
      maxWidth={false}
      disableGutters
      component="section"
      sx={{ position: 'relative' }}
    >
      <Grid container spacing={2} sx={{ alignItems: 'center' }}>
        <Grid item md={7.5}>
          <Typography variant="h1" component="h1" sx={styles.Title}>
            Creative agency
          </Typography>
          <Typography variant="body1" component="p" sx={styles.Paragraph}>
            Lorem ipsum dolor sit amat, consenter adipisicing elite, sed do
            elusion tempore incident ut laborer et dolores magna aliquant.
          </Typography>
          <Box sx={styles.Button}>
            <Link href="/">
              <a>
                <ButtonBase>Read More</ButtonBase>
              </a>
            </Link>
          </Box>
        </Grid>
        <Grid item md={4.5} sx={styles.Image}>
          <Box component="img" src={Image} alt="Logo" width="100%" />
        </Grid>
      </Grid>
      <Box sx={styles.SVG}>
        <HeroSvg />
      </Box>
    </Container>
  );
};

export default Hero;
