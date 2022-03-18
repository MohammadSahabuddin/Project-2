//Packages
import { Box, Typography } from '@mui/material';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

//Data
import ClientData from 'Data/Client/Client.data';

//Styles
import styles from 'Styles/Client/Client.style';

const ClientCarousel = ({ slides, options = { loop: true } }) => {
  //ADD for Autoplay
  const autoplay = useRef(
    Autoplay(
      { delay: 3000, stopOnInteraction: false },
      (emblaRoot) => emblaRoot.parentElement
    )
  );
  //END Autoplay

  //ADD for Autoplay
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [autoplay.current]);
  //END Autoplay

  // const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  // const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  // const scrollNext = useCallback(() => {
  //   if (!emblaApi) return;
  //   emblaApi.scrollNext();
  //   autoplay.current.reset();
  // }, [emblaApi]);

  // const scrollPrev = useCallback(() => {
  //   if (!emblaApi) return;
  //   emblaApi.scrollPrev();
  //   autoplay.current.reset();
  // }, [emblaApi]);

  // const onSelect = useCallback(() => {
  //   if (!emblaApi) return;
  //   setPrevBtnEnabled(emblaApi.canScrollPrev());
  //   setNextBtnEnabled(emblaApi.canScrollNext());
  // }, [emblaApi]);

  // useEffect(() => {
  //   if (!emblaApi) return;
  //   onSelect();
  //   emblaApi.on('select', onSelect);
  // }, [emblaApi, onSelect]);

  return (
    <Box className="embla" sx={styles.embla}>
      <Box className="embla__viewport" ref={emblaRef} sx={styles.emblaViewport}>
        <Box className="embla__container" sx={styles.emblaContainer}>
          {ClientData.map((carousel, i) => (
            <Box className="embla__slide" key={i} sx={styles.emblaSlide}>
              <Box className="embla__slide__inner" sx={styles.emblaSlideInner}>
                <Box
                  className="embla__slide__img"
                  component="img"
                  src={carousel.img}
                  alt="try"
                  width="100%"
                  sx={styles.emblaSlideImg}
                />
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ClientCarousel;
