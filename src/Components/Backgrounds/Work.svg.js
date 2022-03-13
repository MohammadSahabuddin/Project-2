import { Box } from '@mui/material';
import SVG1 from 'Assets/svg/svgexport-4.svg';
import SVG2 from 'Assets/svg/svgexport-5.svg';
import SVG3 from 'Assets/svg/svgexport-6.svg';

import React from 'react';

const WorkSvg = () => {
  return (
    <Box>
      <Box>
        <Box component="img" src={SVG1} alt="Logo" width="100%" />
      </Box>
      <Box>
        <Box component="img" src={SVG2} alt="Logo" width="100%" />
      </Box>
      <Box>
        <Box component="img" src={SVG3} alt="Logo" width="100%" />
      </Box>
    </Box>
  );
};

export default WorkSvg;
