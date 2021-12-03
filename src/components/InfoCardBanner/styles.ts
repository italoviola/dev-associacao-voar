import styled from 'styled-components';
import { Grid } from '@mui/material';
import { colors, breakpoints } from '../../styles/global.styles.js';

export const Banner = styled.div`
  background-color: ${colors.yellow};
  width: 100%;
`;

export const Container = styled(Grid).attrs({
  container: true,
})`
  max-width: 1144px;
  width: 100%;
  padding: 24px;
  margin: 0 auto 16px;

  ${breakpoints.desktop} {
    padding: 40px;
  }
`;

export const TitleWrapper = styled.div`
  text-align: left;
  max-width: 490px;
  margin: 0 auto 16px;

  ${breakpoints.desktop} {
    margin: 0 40px 0 0;
  }
`;

export const TextWrapper = styled.div`
  text-align: left;
  max-width: 490px;
  margin: 0 auto;
`;
