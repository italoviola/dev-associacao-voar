import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import Title from '../../../../components/Title';
import Text from '../../../../components/Text';
import Button from '../../../../components/Button';
import { colors } from '../../../../styles/global.styles.js';
// import { CardProps } from './interface';

import Card from '../../../../components/Card';
import SpeechBubble from '../../../../components/SpeechBubble';
import InfoCardBanner from '../../../../components/InfoCardBanner';
import { Carousel } from 'react-responsive-carousel';

import image from '../../../../assets/card-2.png';

import { Container, ContentGrid, TitleGrid, CTAText, CTAButton, StyledButton } from './styles';

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
  text: (<p><strong>Quer entender mais sobre o processo?</strong></p>),
  button: 'Ver as etapas de seleção',
};


const OPrograma: React.FC = ({ children }) => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 900;
  React.useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);

    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);
  const renderCard: any = () => {
    if (width < breakpoint) {
      return (
        <Carousel 
          showArrows={false}
          showIndicators={false}
          showStatus={false}
          showThumbs={false}
        >
          {
            cards.map((item: any) => {
              return (
                <Grid item>
                  <Card image={item.image} title={item.title}>
                    {item.text}
                  </Card>
                </Grid>
              )
            })
          }
        </Carousel>
      )
    } else {
      return cards.map((item: any) => {
        return (
          <Grid item>
            <Card image={item.image} title={item.title}>
              {item.text}
            </Card>
          </Grid>
        )
      })
    }
  }
  return (
    <>
      <Container>
        <ContentGrid container spacing={2}>
          <TitleGrid item>
            <Title type="h2" title={descs.title} color={colors.purple} />
          </TitleGrid>
          <Grid item>
            <Text>{descs.text}</Text>
          </Grid>
        </ContentGrid>
      </Container>
      <Container>
        <ContentGrid container spacing={3}>
          {renderCard()}
        </ContentGrid>
      </Container>
      <Container>
        <ContentGrid container spacing={2}>
          <CTAText xs={12} md={6} item>
            <Text size="20">{cta.text}</Text>
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
