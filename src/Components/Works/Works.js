import * as React from 'react';
import {
  Box,
  Container,
  Grid,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from '@mui/material';

//Data
import Work from 'Data/Works/Works.data';

//styles
import styles from 'Styles/Works/Works';

//Component
import WorkSvg from 'Components/Backgrounds/Work.svg';

export default function Works() {
  return (
    <Container
      maxWidth={false}
      disableGutters
      component="section"
      sx={{ mt: '16%' }}
    >
      <Grid container spacing={false} gap={false}>
        {Work.map((item) => (
          <Grid
            item
            md={4}
            key={item.img}
            sx={{ position: 'relative', li: { height: '100%' } }}
            className="FaizanItem"
          >
            <ImageListItem className="ImageListItem">
              <Box
                component="img"
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
                width="100%"
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
