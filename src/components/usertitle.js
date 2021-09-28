import React from 'react';
import Card from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css';

function UserTitle({name}) {
    const UserTitleStyle = {
        marginTop: '2rem'
      };
    
      return (
        <Card.Title style={UserTitleStyle}>
          {name}
        </Card.Title>
      )
}
  export default UserTitle;