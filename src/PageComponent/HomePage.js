import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import "react-simple-flex-grid/lib/main.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import User from '../components/alluserinfolayout';

function HomePage() {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    Axios.get('https://jsonplaceholder.typicode.com/users/')
      .then(res => setUsersData(res.data));
  }, [])

  return (
    <ReactBootStrap.Container >
        <ReactBootStrap.Row lg={3}>
                {usersData.map(user => (
                    <ReactBootStrap.Col>
                        <User key={user.username} user={user}/>
                    </ReactBootStrap.Col>
                ))}
        </ReactBootStrap.Row>
    </ReactBootStrap.Container>
  )
}
export default HomePage;