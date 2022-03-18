import * as React from 'react';
import {
  Box,
  Container,
  Grid,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from '@mui/material';

//Animation
// import AOS from 'aos';
// import 'aos/dist/aos.css';

//Data
import Work from 'Data/Works/Works.data';

//styles
import styles from 'Styles/Works/Works.style';

//Component
import WorkSvg from 'Components/Backgrounds/Work.svg';

export default function Works() {
  return (
    <Container
      maxWidth={false}
      disableGutters
      component="section"
      sx={styles.Container}
    >
      <Grid container spacing={0}>
        {Work.map((item) => (
          <Grid item md={4} key={item.img} className="FaizanItem">
            <ImageListItem
              className="FaizanListItem"
              sx={{
                height: '100% !important',
              }}
            >
              <Box
                component="img"
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
                sx={{ height: '100%', width: '100%' }}
                className="SiamBD"
              />
              <ImageListItemBar
                title={
                  <Typography variant="h4" component="h4">
                    {item.title}
                  </Typography>
                }
                subtitle={
                  <Typography variant="h6" component="h6">
                    {item.author}
                  </Typography>
                }
                sx={styles.HoverEffect}
                className="HoverEffect"
              />
            </ImageListItem>
          </Grid>
        ))}
      </Grid>
      <Box>
        <WorkSvg />
      </Box>
    </Container>
  );
}
