import React from 'react';
import {
  TestimonialProfileDiv,
  ProfileImage,
} from './TestimonialProfileStyles';

const TestimonialProfile = ({ imageUrl, name, role }) => {
  return (
    <TestimonialProfileDiv>
      <ProfileImage src={imageUrl} />
      <div>
        <strong>{name}</strong>
        <span>{role}</span>
      </div>
    </TestimonialProfileDiv>
  );
};

export default TestimonialProfile;
