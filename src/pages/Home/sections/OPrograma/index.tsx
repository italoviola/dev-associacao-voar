import React from 'react';
import { Grid } from '@mui/material';
import Title from '../../../../components/Title';
import Text from '../../../../components/Text';
import Button from '../../../../components/Button';
import { colors } from '../../../../styles/global.styles.js';
// import { CardProps } from './interface';

import Card from '../../../../components/Card';
import SpeechBubble from '../../../../components/SpeechBubble';
import InfoCardBanner from '../../../../components/InfoCardBanner';

import image from '../../../../assets/card-2.png';

import { Container, ContentGrid, CTAText, CTAButton, StyledButton } from './styles';

const descs = {
  title: 'Já pensou em decolar na carreira que você sempre sonhou?',
  text: (
    <p>Acreditamos que as pessoas podem chegar aonde elas quiserem e que não é possível mensurar o tamanho de um sonho.<br/>
    Requisitos para se candidatar a uma bolsa de estudo: ensino médio completo e comprovação socioeconômica.</p>
  )
};

const cards = [
  {
    image: image,
    title: 'Piloto',
    text: (
      <div>
        <p>
          Se você tem paixão pela máquina e seu coração bate mais forte com o barulho dos motores,
          esse é o caminho para você se tornar um mecânico de aeronaves.
        </p>
      </div>
    )
  },
  {
    image: image,
    title: 'Piloto',
    text: (
      <div>
        <p>
          Se você tem paixão pela máquina e seu coração bate mais forte com o barulho dos motores,
          esse é o caminho para você se tornar um mecânico de aeronaves.
        </p>
      </div>
    )
  },
  {
    image: image,
    title: 'Piloto',
    text: (
      <div>
        <p>
          Se você tem paixão pela máquina e seu coração bate mais forte com o barulho dos motores,
          esse é o caminho para você se tornar um mecânico de aeronaves.
        </p>
      </div>
    )
  }
];

const cta = {
  text: (<p>Quer entender mais sobre o processo?</p>),
  button: 'Ver as etapas de seleção',
};

const OPrograma: React.FC = ({ children }) => {
  return (
    <>
      <Container>
        <ContentGrid container spacing={2}>
          <Grid item>
            <Title type="h2" title={descs.title} color={colors.purple} />
          </Grid>
          <Grid item>
            <Text>{descs.text}</Text>
          </Grid>
        </ContentGrid>
      </Container>
      <Container>
        <ContentGrid container spacing={3}>
          {cards.map((item: any) => {
            return (
              <Grid item>
                <Card image={item.image} title={item.title}>
                  {item.text}
                </Card>
              </Grid>
            )
          })}
        </ContentGrid>
      </Container>
      <Container>
        <ContentGrid container spacing={2}>
          <CTAText xs={12} md={6} item>
            <Text>{cta.text}</Text>
          </CTAText>
          <CTAButton xs={12} md={6} item>
            <StyledButton theme="primary">
              {cta.button}
            </StyledButton>
          </CTAButton>
        </ContentGrid>
      </Container>
    </>
  );
};

export default OPrograma;
