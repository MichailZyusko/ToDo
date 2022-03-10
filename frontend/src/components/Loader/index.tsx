import { SpinnerInfinity } from 'spinners-react';
import React from 'react';
import { AppContainer } from '../Containers';

export default function Loader() {
  return (
    <AppContainer>
      <SpinnerInfinity size={150} />
    </AppContainer>
  );
}
