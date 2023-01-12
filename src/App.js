import axios from "axios";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";

function App() {
  //create a local state
  const [users, setUsers] = useState([]);
  /*  ------ fetch() method  .then()/.catch()------------- */
  /* const getDataUsers= async ()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(res=> setUsers(res) )
    .catch(err=>console.log(err))
  } */
  /* const getDataUsers= async()=>{
    try {
      const userss = await fetch('https://jsonplaceholder.typicode.com/users')
      const parsedData = await userss.json()
      setUsers(parsedData)
    } catch (error) {
      console.log(error);
    }
  } */

  /* axios for sending HTTP requests --------  */
  const getDataUsers = async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(data);
    } catch (err) {}
  };

  useEffect(() => {
    getDataUsers();
  }, []);
  return (
    <div className="App">
      {users.map((user, i) => (
        <Card key={i} style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{user.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {user.email}
            </Card.Subtitle>
            <Card.Text>
              {user.phone}
            </Card.Text>
            <Card.Link href="#">Details</Card.Link>
            
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default App;
