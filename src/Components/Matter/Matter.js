//Packages
import { Box, ButtonBase, Container, Typography } from '@mui/material';
import Link from 'next/link';

//image
import image from 'Assets/h1-img-7.jpg';

const Matter = () => {
  return (
    <Container>
      <Box>
        <Box component="img" src={image} alt="Logo" width="100%" />
      </Box>
      <Box>
        <Typography variant="h4" component="h4">
          Unique packaging matters
        </Typography>
        <Box></Box>
        <Typography variant="body1" component="p">
          Lorem ipsum dolor sit amat, consenter adipisicing elite, sed do
          elusion tempore incident ut laborer
        </Typography>
        <Box>
          <Link href="/">
            <a>
              <ButtonBase>
                <Typography variant="body1" component="p">
                  Read more
                </Typography>
              </ButtonBase>
            </a>
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default Matter;
