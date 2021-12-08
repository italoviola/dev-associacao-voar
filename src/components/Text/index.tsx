import React from 'react';
import { Text, Text20 } from './styles';
import { TextProps } from './interface';

const TextBox: React.FC<TextProps> = ({ children, size }) => {
  if (size === '20') {
    return <Text20>{children}</Text20>;
  } else {
    return <Text>{children}</Text>;
  }
};

export default TextBox;
