import React from 'react';

function Avatar({name}) {
  const avatarStyles = {
    justifyContent: 'center',
    width: '150px',
    height: '150px',
    margin: '0 auto',
    display: 'flex',
    color: "black",
    backgroundColor: "#bdbbbb",
    borderRadius: '100%',
    alignItems: 'center',
  };

  return (
    <div>
      <h2 style={avatarStyles}>{name.charAt(0)}</h2>
    </div>
  )
}

export default Avatar;