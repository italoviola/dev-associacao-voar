import React from 'react';
import IcomoonReact from 'icomoon-react';

import iconSet from './data/selection.json';
import { IconName } from './types';

interface IconProps {
  className?: string;
  color?: string;
  size: number;
  name: IconName;
}

const Icon: React.FC<IconProps> = ({ className, color, size, name }) => {
  return (
    <IcomoonReact
      className={className}
      iconSet={iconSet}
      color={color}
      size={size}
      icon={name}
    />
  );
};

Icon.defaultProps = {
  className: '',
  color: '',
};

export default Icon;
