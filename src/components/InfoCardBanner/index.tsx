import React from 'react';
import { Grid } from '@mui/material';
import Title from '../Title';
import Text from '../Text';
import { colors } from '../../styles/global.styles.js';

import { Banner, Container, TitleWrapper, TextWrapper } from './styles';

const AVInfoCardBanner: React.FC = () => {
  const title = 'A Associação Voar chegou para mudar a vida das pessoas';
  const text = (
    <div>
      <p>
        Criamos a Associação Voar por acreditarmos que não existe limite pra
        sonhar
      </p>
      <br />
      <p>
        Queremos levar às pessoas a{' '}
        <strong>
          possibilidade de realizar o sonho de se qualificarem profissionalmente
          nas carreiras de piloto, mecânico de aeronaves ou comissário de voo,
        </strong>{' '}
        oferecendo bolsas de estudos para a formação profissional desejada.
      </p>
    </div>
  );

  return (
    <Banner>
      <Container>
        <Grid xs={12} md={6}>
          <TitleWrapper>
            <Title type="h2" title={title} color={colors.purple} />
          </TitleWrapper>
        </Grid>
        <Grid xs={12} md={6}>
          <TextWrapper>
            <Text>{text}</Text>
          </TextWrapper>
        </Grid>
      </Container>
    </Banner>
  );
};

export default AVInfoCardBanner;
