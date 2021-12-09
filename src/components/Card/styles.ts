import styled from 'styled-components';
import { Grid } from '@mui/material';
import { breakpoints, colors } from '../../styles/global.styles.js';

export const Container = styled.div`
  max-width: 327px;
  padding: 8px 8px 16px;
  margin: 0 auto;

  ${breakpoints.desktop} {
    max-width: 364px;
    padding: 0;
    margin: 0;
  }
`;

export const Content = styled(Grid)`
  background-color: ${colors.white};
  border-radius: 8px;
  box-shadow: 0px 4px 16px 0px ${colors.grayShadow};
`;

export const ImageGrid = styled(Grid)`
  border-radius: 8px 8px 0 0;
  text-align: center;
`;

export const Image = styled.img`
  margin-bottom: 24px;
  border-radius: 8px 8px 0 0;
  width: 100%;
`;

export const TitleWrapper = styled.div`
  text-align: left;
  margin-bottom: 16px;
  padding: 0 16px;
`;

export const TextWrapper = styled.div`
  padding: 0 16px 16px;
  text-align: left;
`;
