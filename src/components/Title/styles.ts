import styled from 'styled-components';
import { breakpoints } from '../../styles/global.styles.js';

export const Heading1 = styled.h1`
  font-family: 'Source Sans Pro', sans-serif;
  color: ${(props) => props.color};
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;

  ${breakpoints.desktop} {
    font-size: 56px;
    line-height: 56px;
  }
`;

export const Heading2 = styled(Heading1)`
  font-size: 24px;
  line-height: 30px;

  ${breakpoints.desktop} {
    font-size: 36px;
    line-height: 45px;
  }
`;

export const Heading3 = styled(Heading1)`
  font-size: 24px;
  line-height: 30px;
`;

export const Heading4 = styled(Heading1)`
  font-size: 20px;
  line-height: 25px;
`;
