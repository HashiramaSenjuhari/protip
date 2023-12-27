// RegistrationFormComponent.jsx
import React, { useState } from 'react';

const RegistrationFormComponent = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contacts: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation for empty fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.contacts) {
      setMessage('Please fill out all fields!');
      return;
    }

    // Additional constraints for the "Contacts" field
    const contactsRegex = /^\d{10}$/; // Assuming a valid contact is a 10-digit number
    if (!contactsRegex.test(formData.contacts)) {
      setMessage('Invalid contact number. Please enter a 10-digit number.');
      return;
    }

    // If all validations pass, show success message
    setMessage('Registration successful!');
  };

  return (
    <div style={formContainerStyle}>
      <form style={formStyle} onSubmit={handleSubmit}>
        <label style={labelStyle}>
          First Name:
          <input
            style={inputStyle}
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </label>
        <label style={labelStyle}>
          Last Name:
          <input
            style={inputStyle}
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </label>
        <label style={labelStyle}>
          Email:
          <input
            style={inputStyle}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label style={labelStyle}>
          Contacts:
          <input
            style={inputStyle}
            type="tel"
            name="contacts"
            value={formData.contacts}
            onChange={handleChange}
          />
        </label>
        <button style={buttonStyle} type="submit">
          Register
        </button>
      </form>
      {message && <p style={messageStyle}>{message}</p>}
    </div>
  );
};

const formContainerStyle = {
  textAlign: 'center',
  margin: '20px',
};

const formStyle = {
  width: '300px',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  display: 'inline-block',
};

const labelStyle = {
  display: 'block',
  marginBottom: '10px',
  fontSize: '14px',
  fontWeight: 'bold',
};

const inputStyle = {
  width: '100%',
  padding: '8px',
  boxSizing: 'border-box',
  marginBottom: '10px',
};

const buttonStyle = {
  width: '100%',
  padding: '10px',
  backgroundColor: '#4caf50',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const messageStyle = {
  marginTop: '15px',
  color: '#4caf50',
  fontWeight: 'bold',
};

export default RegistrationFormComponent;
