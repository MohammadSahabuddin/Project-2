//Packages
import { Box } from '@mui/material';
//Image
import SVG from 'Assets/svg/svgexport-8.svg';
//Styles
import styles from 'Styles/Matter/Matter.svg.style';

const BrandSvg = () => {
  return (
    <Box className="Faizan" sx={styles.SVG}>
      <Box component="img" src={SVG} alt="Logo" width="100%" />
    </Box>
  );
};

export default BrandSvg;
