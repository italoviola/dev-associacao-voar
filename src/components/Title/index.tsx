import React from 'react';
import { TitleProps } from './interface';

import { Heading1, Heading2, Heading3, Heading4 } from './styles';

const TitleBox: React.FC<TitleProps> = (props) => {
  const { title, type, color } = props;

  const renderTitle = () => {
    let titleElement;
    if (type === 'h1')
      titleElement = (
        <Heading1 as={type} color={color}>
          {title}
        </Heading1>
      );
    if (type === 'h2')
      titleElement = (
        <Heading2 as={type} color={color}>
          {title}
        </Heading2>
      );
    if (type === 'h3')
      titleElement = (
        <Heading3 as={type} color={color}>
          {title}
        </Heading3>
      );
    if (type === 'h4')
      titleElement = (
        <Heading4 as={type} color={color}>
          {title}
        </Heading4>
      );
    return titleElement;
  };

  return <>{renderTitle()}</>;
};

export default TitleBox;
