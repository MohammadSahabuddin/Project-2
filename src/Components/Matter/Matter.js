//Packages
import { Box, ButtonBase, Container, Grid, Typography } from '@mui/material';
import Link from 'next/link';

//image
import image from 'Assets/h1-img-7.jpg';

//Component
import MatterLeft from './MatterLeft';

//styles
import styles from 'Styles/Matter/Matter.style';

const Matter = () => {
  return (
    <Container
      maxWidth={false}
      disableGutters
      component="section"
      sx={styles.Brands}
    >
      <Grid
        container
        columnSpacing={2}
        sx={{ justifyContent: 'center', position: 'relative' }}
      >
        <Grid item md={4}>
          <Box sx={styles.Texts}>
            <MatterLeft />
          </Box>
        </Grid>
        <Grid item md={8}>
          <Box sx={styles.Image}>
            <Box component="img" src={image} alt="Logo" width="100%" />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Matter;
