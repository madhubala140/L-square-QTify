import React from 'react';
import LogoImage from "../../../Assests/Logo.png";

const Logo = () => {
  const logoContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '20px', // Adjust as needed
  };

  return (
    <div style={logoContainerStyle}>
      <img src={LogoImage} alt="Logo" />
    </div>
  );
};

export default Logo;