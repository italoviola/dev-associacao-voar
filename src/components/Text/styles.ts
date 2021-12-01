import styled from 'styled-components';
import { colors, breakpoints } from '../../styles/global.styles.js';

export const Text = styled.div`
  font-family: 'Source Sans Pro', sans-serif;
  color: ${colors.black};
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;

  ${breakpoints.desktop} {
    font-size: 16px;
  }
`;
