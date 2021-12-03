import React from 'react';
import { Grid } from '@mui/material';
import Title from '../../../../components/Title';
import Text from '../../../../components/Text';
import { colors } from '../../../../styles/global.styles.js';
// import { CardProps } from './interface';

import Card from '../../../../components/Card';
import SpeechBubble from '../../../../components/SpeechBubble';
import InfoCardBanner from '../../../../components/InfoCardBanner';

import image from '../../../../assets/card-2.png';
const descs = {
  title: 'Já pensou em decolar na carreira que você sempre sonhou?',
  text: (<p>Acreditamos que as pessoas podem chegar aonde elas quiserem e que não é possível mensurar o t</p>)
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

// import { Container, ImageGrid, Image, TitleWrapper, TextWrapper } from './styles';
const OPrograma: React.FC = ({ children }) => {
  return (
    <div>
      <InfoCardBanner />
      <Title type="h2" title={descs.title} color={colors.purple} />
      <Text>{descs.text}</Text>
      <div>
        {cards.map((item: any) => {
          return (
            <Card image={item.image} title={item.title}>
              {item.text}
            </Card>
          )
        })}
      </div>
      <SpeechBubble />
    </div>
  );
};

export default OPrograma;
