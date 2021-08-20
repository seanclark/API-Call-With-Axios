import React from 'react';
import FetchData from './FetchData';
import CssBaseline from '@material-ui/core/CssBaseline'

function App() {
return (
  <React.Fragment>
      <CssBaseline />
      {
        <FetchData />
      }
    </React.Fragment>
   )
  } 
  
  
  
  
  
  
  
  
  
  
  
  
  /*axios.defaults.baseURL = "https://reqres.in/api";
  const getData = ()=> {
  axios.get("/users")
  .then(res => console.log(res.data.data));
  }
  const postData = () => {
  axios.post("/users")
  .then((res) => console.log(res))
  .catch((res) => console.log(res));
  } 

  return (
    <div className="App">
      <h1>User Directory</h1>
      <button onClick = {getData}>Get User Records</button>
      <button onClick = {postData}>Post New Record</button>
       </div>
  )
  }*/
export default App;
