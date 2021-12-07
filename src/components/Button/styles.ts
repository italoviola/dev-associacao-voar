import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import Icon from '../Icon';
import { colors } from '../../styles/global.styles.js';
import { ButtonProps } from './index';

interface ButtonStyles {
  [x: string]: {
    button: FlattenSimpleInterpolation;
    icon: FlattenSimpleInterpolation;
  };
}

const buttonStyles: ButtonStyles = {
  primary: {
    button: css`
      color: ${colors.white};
      background-color: ${colors.pink};
      border-color: ${colors.pink};
    `,
    icon: css`
      fill: ${colors.white};
    `,
  },
  disabled: {
    button: css`
      color: ${colors.white};
      background-color: ${colors.grayMedium};
      border-color: ${colors.grayMedium};
    `,
    icon: css`
      fill: ${colors.white};
    `,
  },
  secondary: {
    button: css`
      color: ${colors.white};
      background-color: ${colors.purple};
      border-color: ${colors.purple};
    `,
    icon: css`
      fill: ${colors.white};
      color: ${colors.white};
    `,
  },
  'secondary-outlined': {
    button: css`
      color: ${colors.purple};
      background-color: transparent;
      border-color: ${colors.purple};
    `,
    icon: css`
      fill: ${colors.white};
    `,
  },
};

export const Container = styled.button<ButtonProps>`
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: 'Source Sans Pro', sans-serif;
  text-align: center;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;

  border-radius: 60px;
  border: 1px solid transparent;
  transition: opacity 200ms;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  ${(props) => buttonStyles[props.theme].button}
`;

export const StyledIcon = styled(Icon).attrs({
  size: 24,
  color: colors.white,
})`
  margin-right: 8px;

  ${(props) => buttonStyles[props.theme]?.icon}
`;
