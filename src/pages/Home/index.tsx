import React from 'react';
import { Grid } from '@mui/material';
import Title from '../../components/Title';
import Text from '../../components/Text';
import { colors } from '../../styles/global.styles.js';
// import { CardProps } from './interface';

import OPrograma from './sections/OPrograma';

import image from '../../assets/card-2.png'
const title = 'Mecânico de aeronaves';
const text = (
  <div>
    <p>
      Se você tem paixão pela máquina e seu coração bate mais forte com o barulho dos motores,
      esse é o caminho para você se tornar um mecânico de aeronaves.
    </p>
  </div>
);

// import { Container, ImageGrid, Image, TitleWrapper, TextWrapper } from './styles';
const Home: React.FC = ({ children }) => {
  return (
    <div>
      <OPrograma />
    </div>
  );
};

export default Home;
