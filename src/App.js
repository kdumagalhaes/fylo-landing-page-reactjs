import React, { Fragment } from 'react';
import GlobalReset from './GlobalReset';
import Header from './components/Header/Header';
import SecureLocation from './components/Divs/SecureLocation/SecureLocation';
import StayProductive from './components/Divs/StayProductive/StayProductive';

function App() {
  return (
    <Fragment>
      <Header />
      <SecureLocation />
      <StayProductive/>
      <GlobalReset />
    </Fragment>
  );
}

export default App;
