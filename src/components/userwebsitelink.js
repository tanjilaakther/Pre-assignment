import React from 'react';
import Card from 'react-bootstrap/Card';

function UserWebSiteLink({website}) {
    const UserLinkStyle = {
        marginBottom: '0.5rem',
    }
  return (
    <Card.Link style={UserLinkStyle}>
        <a href={website}>http://{website}</a>
    </Card.Link>
  )
}
export default UserWebSiteLink;