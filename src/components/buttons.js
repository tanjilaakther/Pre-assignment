//import React, {Component} from 'react';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PButton from 'react-bootstrap/Button';

function PrimaryButton() {
  const buttonStyles = {
    marginTop: '25px',
    marginBottom: '25px'
  };
  return (
      <PButton primary style={buttonStyles}>MORE DETAILS</PButton>
  )
}

export default PrimaryButton;
