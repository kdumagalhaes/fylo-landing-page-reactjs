import React, { Fragment } from 'react';
import { InputTag } from './InputStyle';

const Input = ({ maxWidth, placeholder, shadow, backgroundColor, margin, responsiveWidth }) => {
  return (
    <Fragment>
      <InputTag
        maxWidth={maxWidth}
        placeholder={placeholder}
        shadow={shadow}
        backgroundColor={backgroundColor}
        margin={margin}
        responsiveWidth={responsiveWidth}
      />
    </Fragment>
  );
};

export default Input;
