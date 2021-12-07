import React from 'react';
import { IconName } from '../Icon/types';

import { Container, StyledIcon } from './styles';

export interface ButtonProps {
  theme: 'primary' | 'disabled' | 'secondary' | 'secondary-outlined';
  className?: string;
  icon?: IconName;
}

const Button: React.FC<ButtonProps> = ({
  theme = 'primary',
  children,
  className = '',
  icon,
}) => {
  return (
    <Container theme={theme} className={className}>
      {icon && <StyledIcon name={icon} />}
      {children}
    </Container>
  );
};

export default Button;
