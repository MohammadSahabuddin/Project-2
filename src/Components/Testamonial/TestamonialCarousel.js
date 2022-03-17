//Packages
import { Box, Typography } from '@mui/material';
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { PrevButton, NextButton } from './TestamonialButton';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

//Data
import CarouselData from 'Data/Testamonial/Testamonial.data';

//Styles
import styles from 'Styles/Testamonial/TestamonialCarousel.style';

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

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
    autoplay.current.reset();
  }, [emblaApi]);

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
    autoplay.current.reset();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <Box className="embla" sx={styles.embla}>
      <Box className="embla__viewport" ref={emblaRef} sx={styles.emblaViewport}>
        <Box className="embla__container" sx={styles.emblaContainer}>
          {CarouselData.map((carousel, i) => (
            <Box className="embla__slide" key={i} sx={styles.emblaSlide}>
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
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </Box>
  );
};

export default ClientCarousel;
