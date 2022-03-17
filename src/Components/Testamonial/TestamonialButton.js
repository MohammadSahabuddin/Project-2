//Packages
import { Box, Button } from '@mui/material';

import React from 'react';
//Styles
import styles from 'Styles/Testamonial/TestamonialCarousel.style';

//Icon

import { Icon } from '@iconify/react';

export const PrevButton = ({ enabled, onClick }) => (
  <Button
    className="embla__button embla__button--prev"
    onClick={onClick}
    disabled={!enabled}
    sx={styles.emblaButton}
  >
    <Box className="embla__button__svg">
      <Icon icon="gg:arrow-long-left" />
    </Box>
  </Button>
);

export const NextButton = ({ enabled, onClick }) => (
  <Button
    className="embla__button embla__button--next"
    onClick={onClick}
    disabled={!enabled}
  >
    <Box className="embla__button__svg">
      <Icon icon="gg:arrow-long-right" />
    </Box>
  </Button>
);
