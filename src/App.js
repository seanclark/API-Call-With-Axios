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
  
  
export default App;
