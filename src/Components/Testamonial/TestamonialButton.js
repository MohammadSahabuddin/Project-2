//Packages
import { Box, ButtonBase } from '@mui/material';

//Images
import Prev from 'Assets/svg/svgexport-9.svg';
import Next from 'Assets/svg/svgexport-10.svg';

//Styles
import styles from 'Styles/Testamonial/TestamonialCarousel.style';

//Icon
import { Icon } from '@iconify/react';

export const PrevButton = ({ enabled, onClick }) => (
  <ButtonBase
    className="embla__button embla__button--prev"
    onClick={onClick}
    disabled={!enabled}
    sx={styles.emblaButton}
  >
    <Box className="embla__button__svg">
      {/* <Icon icon="gg:arrow-long-left" /> */}
      <Box component="img" src={Prev} atl="Prev" />
    </Box>
  </ButtonBase>
);

export const NextButton = ({ enabled, onClick }) => (
  <ButtonBase
    className="embla__button embla__button--next"
    onClick={onClick}
    disabled={!enabled}
    sx={styles.emblaButton}
  >
    <Box className="embla__button__svg">
      {/* <Icon icon="gg:arrow-long-right" /> */}
      <Box component="img" src={Next} atl="Next" />
    </Box>
  </ButtonBase>
);
