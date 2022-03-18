//Packages
import { Box } from '@mui/material';

//SVG
import SVG1 from 'Assets/svg/svgexport-4.svg';
import SVG2 from 'Assets/svg/svgexport-5.svg';
import SVG3 from 'Assets/svg/svgexport-6.svg';

//Styles
import styles from 'Styles/Works/Work.svg.style';

const WorkSvg = () => {
  return (
    <Box>
      <Box sx={styles.FirstSVG}>
        <Box component="img" src={SVG1} alt="Logo" width="100%" />
      </Box>
      <Box sx={styles.SecondSVG}>
        <Box component="img" src={SVG2} alt="Logo" width="100%" />
      </Box>
      <Box sx={styles.ThirdSVG}>
        <Box component="img" src={SVG3} alt="Logo" width="100%" />
      </Box>
    </Box>
  );
};

export default WorkSvg;
