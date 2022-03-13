import { Box } from '@mui/material';
import SVG from 'Assets/svg/svgexport-3.svg';

import React from 'react';

const HeroSvg = () => {
  return (
    <Box>
      <Box component="img" src={SVG} alt="Logo" width="100%" />
    </Box>
  );
};

export default HeroSvg;
