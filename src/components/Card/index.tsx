import React, { useRef } from 'react';
import { Grid } from '@mui/material';
import Title from '../Title';
import Text from '../Text';
import { colors } from '../../styles/global.styles.js';
import { CardProps } from './interface';
import { useObserver } from '../../hooks/useObserver';

import { Container, Content, ImageGrid, Image, TitleWrapper, TextWrapper } from './styles';

const Card: React.FC<CardProps> = ({ children, image, title }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isVisible = useObserver(containerRef);

  return (
    <Container ref={containerRef}>
      <Content container animate={isVisible}>
        <ImageGrid item xs={12}>
          <Image src={image} />
        </ImageGrid>
        <Grid item xs={12}>
          <TitleWrapper>
            <Title type="h4" title={title} color={colors.purple} />
          </TitleWrapper>
          <TextWrapper>
            <Text>{children}</Text>
          </TextWrapper>
        </Grid>
      </Content>
    </Container>
  );
};

export default Card;
