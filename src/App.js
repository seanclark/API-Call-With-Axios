import React from 'react';
import FetchData from './FetchData';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

function App() {
return (
  <React.Fragment>
      <CssBaseline />
      {
        <Container maxWidth="sm">
         <h1>POST SEARCH</h1>
        <FetchData />
        </Container>
      }
    </React.Fragment>
   )
  } 
  
 export default App;
