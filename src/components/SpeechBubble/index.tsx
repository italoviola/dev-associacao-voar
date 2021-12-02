import React from 'react';
import { Grid } from '@mui/material';
import Title from '../Title';
import Text from '../Text';
import { colors } from '../../styles/global.styles.js';

import { Banner, Container, ImageGrid, Image, TitleWrapper, TextWrapper } from './styles';

const SpeechBubble: React.FC = () => {
  const title = 'Quem mantém o programa?';
  const text = (
    <div>
      <p>
        Os principais mantenedores da Associação Voar são executivos da Azul
        Linhas Aéreas, que deram o pontapé inicial como agentes importantes de
        transformação social, de educação e empoderamento de pessoas.
      </p>
      <br />
      <p>
        Também somos apoiados por outros executivos que atuam no ramo da
        aviação, empresas que fazem esse mercado funcionar e qualquer pessoa ou
        empresa que queira incentivar a qualificação profissional para o setor.
      </p>
    </div>
  );

  return (
    <Banner>
      <Container container spacing={{ xs: 2, md: 4 }}>
        <ImageGrid item xs={12} md={3}>
          <Image src="https://placekitten.com/207/161" />
        </ImageGrid>
        <Grid item xs={12} md={9}>
          <TitleWrapper>
            <Title type="h3" title={title} color={colors.black} />
          </TitleWrapper>
          <TextWrapper>
            <Text>{text}</Text>
          </TextWrapper>
        </Grid>
      </Container>
    </Banner>
  );
};

export default SpeechBubble;
