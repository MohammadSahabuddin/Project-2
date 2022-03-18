//Packages
import { Box } from '@mui/material';
//Image
import SVG from 'Assets/svg/svgexport-7.svg';
//Styles
import styles from 'Styles/Brand/Brand.svg.style';

const BrandSvg = () => {
  return (
    <Box sx={styles.SVG} className="Faizan">
      <Box component="img" src={SVG} alt="Logo" width="100%" />
    </Box>
  );
};

export default BrandSvg;
