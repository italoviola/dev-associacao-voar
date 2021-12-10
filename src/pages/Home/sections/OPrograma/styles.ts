import styled, { css } from 'styled-components';
import { Grid } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';

import Button from '../../../../components/Button';
import { colors, breakpoints } from '../../../../styles/global.styles.js';

interface AnimateProps {
  animate: boolean;
}

export const Container = styled.div`
  max-width: 1148px;
  margin: 0 auto;
  padding: 30px 24px 0;
`;

export const ContainerCarousel = styled.div<AnimateProps>`
  max-width: 327px;
  margin: 0 auto;
  padding: 30px 24px 0;

  // Animate
  opacity: 0;
  transform: scale(0.8);
  transition: opacity 1.5s, transform 1.5s;
  ${(props) =>
    props.animate &&
    css`
      opacity: 1;
      transform: scale(1);
    `}

  ${breakpoints.desktop} {
    max-width: 364px;
  }
`;

export const ContentGrid = styled(Grid)<AnimateProps>`
  align-items: center;
  justify-content: center;

  // Animate
  opacity: 0;
  transform: scale(0.8);
  transition: opacity 1.5s, transform 1.5s;
  ${(props) =>
    props.animate &&
    css`
      opacity: 1;
      transform: scale(1);
    `}
`;

export const TitleGrid = styled(Grid)`
  max-width: 570px;
`;

export const CTAText = styled(Grid)`
  text-align: center;
  ${breakpoints.desktop} {
    text-align: right;
  }
`;

export const CTAButton = styled(Grid)`
  text-align: center;

  ${breakpoints.desktop} {
    text-align: left;
  }
`;

export const StyledButton = styled(Button)`
  margin: 0 auto;
  padding: 0 80px;

  ${breakpoints.desktop} {
    margin: 0;
  }
`;
