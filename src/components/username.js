import React from "react";
import * as all_component from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function UserName({username}) {
    const UserNameStyle = {
      marginTop: '0.5rem',
    }
    
    return (
      <all_component.Container style={UserNameStyle}>
        <span>@{username}</span>
      </all_component.Container>
    )
  }

  export default UserName;