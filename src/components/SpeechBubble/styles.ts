import styled from 'styled-components';
import { Grid } from '@mui/material';
import { colors, breakpoints } from '../../styles/global.styles.js';

export const Banner = styled.div`
  background-color: ${colors.green};
  width: 100%;
  max-width: 949px;
  margin: 0 auto;
  padding: 24px;
`;

export const Container = styled(Grid)`
  position: relative;
  align-items: center;

  ::after {
    content: '';
    width: 33px;
    height: 33px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 100%) rotate(45deg);
    background-color: ${colors.green};
  }
`;

export const ImageGrid = styled(Grid)`
  text-align: center;
`;

export const Image = styled.img`
  width: 128px;

  ${breakpoints.desktop} {
    width: 207px;
  }
`;

export const TitleWrapper = styled.div`
  text-align: left;
  margin-bottom: 16px;
`;

export const TextWrapper = styled.div`
  text-align: left;
`;
