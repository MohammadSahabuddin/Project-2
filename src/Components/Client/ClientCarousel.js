//Packages
import { Box, Typography } from '@mui/material';
import React, { useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

//Data
import ClientData from 'Data/Client/Client.data';

//Styles
import styles from 'Styles/Client/Client.style';

const ClientCarousel = ({ options = { loop: true } }) => {
  //ADD for Autoplay
  const autoplay = useRef(
    Autoplay(
      { delay: 8000, stopOnInteraction: false },
      (emblaRoot) => emblaRoot.parentElement
    )
  );
  //END Autoplay

  //ADD for Autoplay
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [autoplay.current]);
  //END Autoplay

  return (
    <Box className="embla" sx={styles.embla}>
      <Box className="embla__viewport" ref={emblaRef} sx={styles.emblaViewport}>
        <Box className="embla__container" sx={styles.emblaContainer}>
          {ClientData.map((carousel, i) => (
            <Box className="embla__slide" key={i} sx={styles.emblaSlide}>
              {/* <Box className="embla__slide__inner" sx={styles.emblaSlideInner}>
                <Box
                  className="embla__slide__img"
                  component="img"
                  src={carousel.img}
                  alt="try"
                  width="100%"
                  sx={styles.emblaSlideImg}
                />
              </Box> */}
              <Box className="embla__slide__inner">
                <Typography variant="h1" component="h1">
                  {'"'}
                </Typography>
                <Typography variant="body1" component="p">
                  {carousel.description}
                </Typography>
                <Typography variant="h4" component="h4">
                  {carousel.name}
                </Typography>
                <Typography variant="h6" component="h6">
                  {carousel.post}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ClientCarousel;
