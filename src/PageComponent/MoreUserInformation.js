import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as ReactBootstrap from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function UserInfoDetails() {
  const { id } = useParams();
  const [userData, setData] = useState([]);

  useEffect(() => {
    Axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => 
        {
            setData(res.data);
            
        });
      // eslint-disable-next-line
}, [])

  const ListStyle = {
    listStyleType: 'circle'
  }

  const containerStyle = {
    width: '30rem',
    marginTop: '3rem'
  }

  return (
      <ReactBootstrap.Container style={containerStyle}>
          <ReactBootstrap.Card>
              <ul style={ListStyle}>
                  <li>name: {userData.name}</li>
                  <li>username: {userData.username}</li>
                  <li>email: {userData.email}</li>
                  <li>phone: {userData.phone}</li>
                  <li>website: {userData.website}</li>
                  { /*
                  <li>company: {userData.company.name}</li>
                  <li>
                      adress: 
                      <ul style={ListStyle}>
                          <li>street: {userData.address.street}</li>
                          <li>suite: {userData.address.suite}</li>
                          <li>city: {userData.address.city}</li>
                          <li>zipcode: {userData.address.zipcode}</li>
                      </ul>
                  </li>
                  */}
              </ul>
          </ReactBootstrap.Card>
      </ReactBootstrap.Container>
  )
}

export default UserInfoDetails;