//Packages
import { Box, ButtonBase, Typography } from '@mui/material';
import Link from 'next/link';

//styles
import styles from 'Styles/Brand/Brand.style';

const BrandRight = () => {
  return (
    <Box>
      <Typography variant="h4" component="h4" sx={styles.Title}>
        Brands tell original stories
      </Typography>
      <Box sx={styles.Special}></Box>
      <Typography variant="body1" component="p" sx={styles.Description}>
        Lorem ipsum dolor sit amat, consenter adipisicing elite, sed do elusion
        tempore incident ut laborer
      </Typography>
      <Box sx={styles.Button}>
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
  );
};

export default BrandRight;
