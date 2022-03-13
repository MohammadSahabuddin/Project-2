import React, { useState, useEffect, useCallback } from 'react';
import { useEmblaCarousel } from 'embla-carousel/react';
import Image from 'next/image';

import { DotButton } from 'utils/SliderButton';
import Icons from 'utils/icons';
import { Box, Container, Icon, Typography } from '@mui/material';
import ClientData from 'Data/Client/Client.data';
import styles from 'Styles/Client/Carousel.style';

function Slider() {
  const [emblaRef, embla] = useEmblaCarousel({
    containScroll: 'trimSnaps',
    speed: 20,
    draggable: true,
    loop: false,
    slidesToScroll: 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollTo = useCallback(
    (index) => embla && embla.scrollTo(index),
    [embla]
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on('select', onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <Container sx={styles.container}>
      <div className="embla" sx={styles.embla} ref={emblaRef}>
        <div className="embla__container" sx={styles.emblaContainer}>
          {ClientData &&
            ClientData.map((country, i) => (
              <div className="embla__slide" key={i} sx={styles.emblaSlide}>
                <Box sx={styles.country} className="seeNow">
                  <Icon icon={country.icon} />
                  <Typography variant="body1" component="p">
                    {country.description}
                  </Typography>
                </Box>
              </div>
            ))}
        </div>
        <div className="embla__dots" sx={styles.emblaDot}>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              selected={index === selectedIndex}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Slider;
