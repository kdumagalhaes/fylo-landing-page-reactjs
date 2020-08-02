import React, { Fragment } from 'react';
import { InputTag } from './InputStyle';

const Input = ({ width, placeholder, shadow, backgroundColor }) => {
  return (
    <Fragment>
      <InputTag
        width={width}
        placeholder={placeholder}
        shadow={shadow}
        backgroundColor={backgroundColor}
      />
    </Fragment>
  );
};

export default Input;
