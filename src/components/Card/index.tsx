import React from 'react';
import { Grid } from '@mui/material';
import Title from '../Title';
import Text from '../Text';
import { colors } from '../../styles/global.styles.js';
import { CardProps } from './interface';

import { Container, Content, ImageGrid, Image, TitleWrapper, TextWrapper } from './styles';

const Card: React.FC<CardProps> = ({ children, image, title }) => {

  return (
    <Container>
      <Content container>
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
