// RegistrationForm.jsx
import React from 'react';
import RegistrationFormComponent from './RegistrationFormComponent';

const RegistrationForm = () => {
  return (
    <div style={pageStyle}>
      <h1>Registration Form</h1>
      <RegistrationFormComponent />
    </div>
  );
};

const pageStyle = {
  textAlign: 'center',
  padding: '20px',
  backgroundColor: '#f0f0f0',
};

export default RegistrationForm;
