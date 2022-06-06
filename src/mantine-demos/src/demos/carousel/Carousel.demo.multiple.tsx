import React from 'react';
import { Carousel } from '@mantine/carousel';
import { Slides } from './_slides';

const code = `
import { Carousel } from '@mantine/carousel';

function Demo() {
  return (
    <Carousel sx={{ maxWidth: 320 }} mx="auto" withIndicators height={200}>>
      <Carousel.Slide>1</Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}
`;

function Demo() {
  return (
    <Carousel
      mx="auto"
      withIndicators
      height={200}
      slideSize="33.333333%"
      slideGap="md"
      loop
      align="start"
      slidesToScroll={3}
    >
      <Slides count={12} />
    </Carousel>
  );
}

export const multiple: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
