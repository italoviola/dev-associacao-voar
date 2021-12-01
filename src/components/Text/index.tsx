import React from 'react';
import { Text } from './styles';

const TextBox: React.FC = ({ children }) => {
  return <Text>{children}</Text>;
};

export default TextBox;
