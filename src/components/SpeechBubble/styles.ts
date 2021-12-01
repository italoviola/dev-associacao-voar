import styled from 'styled-components';
import { Grid } from '@mui/material';
import { colors, breakpoints } from '../../styles/global.styles.js';

export const Banner = styled.div`
  background-color: ${colors.green};
  width: 100%;
  max-width: 949px;
  margin: 0 auto;
`;

export const Container = styled(Grid).attrs({
  container: true,
})`
  position: relative;
  align-items: center;
  width: 100%;
  padding: 24px;
  margin: 0 auto;
  gap: 16px;

  ${breakpoints.desktop} {
    flex-wrap: nowrap !important;
    padding: 24px 40px;
    gap: 45px;
  }

  ::after {
    content: '';
    width: 33px;
    height: 33px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%) rotate(45deg);
    background-color: ${colors.green};
  }
`;

export const ImageGrid = styled(Grid)`
  text-align: center;
`;

export const Image = styled.img`
  width: 207px;
`;

export const TitleWrapper = styled.div`
  text-align: left;
  margin-bottom: 16px;
`;

export const TextWrapper = styled.div`
  text-align: left;
`;
