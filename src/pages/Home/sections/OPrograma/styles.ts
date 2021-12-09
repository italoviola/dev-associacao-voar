import styled from 'styled-components';
import { Grid } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';

import Button from '../../../../components/Button';
import { colors, breakpoints } from '../../../../styles/global.styles.js';

export const Container = styled.div`
  max-width: 1148px;
  margin: 0 auto;
  padding: 30px 24px 0;
`;

export const ContainerCarousel = styled.div`
  max-width: 327px;
  margin: 0 auto;
  padding: 30px 24px 0;

  ${breakpoints.desktop} {
    max-width: 364px;
  }
`;

export const ContentGrid = styled(Grid)`
  align-items: center;
  justify-content: center;
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
