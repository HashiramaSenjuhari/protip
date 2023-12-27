// Home.jsx
import React from 'react';

const Home = () => {
  return (
    <div style={pageStyle}>
      <h1>Home Page</h1>
      <p>Welcome to the Home page.</p>
    </div>
  );
};

const pageStyle = {
  textAlign: 'center',
  padding: '20px',
  backgroundColor: '#f0f0f0',
};

export default Home;
