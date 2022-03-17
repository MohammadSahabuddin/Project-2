//Packages
import { Box, Typography } from '@mui/material';

//Style
import styles from 'Styles/Footer/Footer.style';

const Texts = () => {
  return (
    <Box sx={styles.Text}>
      <Typography variant="body1" component="p">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna.
      </Typography>
    </Box>
  );
};

export default Texts;
