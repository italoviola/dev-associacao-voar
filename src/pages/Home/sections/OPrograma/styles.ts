import styled from 'styled-components';
import { Grid } from '@mui/material';
import Button from '../../../../components/Button';
import { colors, breakpoints } from '../../../../styles/global.styles.js';

export const Container = styled.div`
  max-width: 1148px;
  margin: 0 auto;
  padding: 24px;
`;

export const ContentGrid = styled(Grid)`
  align-items: center;
  justify-content: center;
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

  ${breakpoints.desktop} {
    margin: 0;
  }
`;
