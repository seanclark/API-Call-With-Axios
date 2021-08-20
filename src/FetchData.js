import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';




const FetchData = () => {
    const[post, setPost] = useState({});
    const[id, setId] = useState("");
    const[idFromButton, setIdFromButton] = useState("");
    
    useEffect(() => {
        axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
        axios.get(`/posts/${idFromButton}`)
    .then(res => {
        console.log(res)
        setPost(res.data)
    })
    .catch(err => {
        alert("Enter a number: 1-100")
    })
    },[idFromButton])
    
    const handleClick = () => {
        setIdFromButton(id)
    }
    const handleKeyPress = e => {
        if(e.key === 'Enter'){
          handleClick();
        }
    }
    const handleReset = (e) => { 
        setId("");
    }
    const handleChange = (e) => {
        setId(e.target.value); 
    }
    return (  
    <div>
        <Container maxWidth="sm">
         <h1>POST SEARCH</h1>
         
            <Grid container spacing={2}>
            <Grid item xs={10} sm={6}>
                <TextField
                autoComplete="off"
                name="enter"
                variant="outlined"
                required
                fullWidth
                id="enter"
                label="Enter 1-100"
                autoFocus
                type = "text" 
                value =  {id} 
                onChange = {handleChange} 
                onKeyDown = {handleKeyPress}
              />
            </Grid>
        </Grid>
        <Box mt={3}>
            <Button
                className = "buttonstyle" 
                fullWidth
                type = "submit" 
                onClick = {handleClick}
                variant="contained" 
                color="primary">    
                Find Post
            </Button>
            </Box>
            <Box mt={3}>
            <Button 
                className = "buttonstyle"
                fullWidth 
                type = "submit" 
                onClick = {handleReset}
                variant="contained" 
                color="default">    
                Reset
            </Button>
            </Box>
            <div>
              <h2>Title</h2>{post.title} 
              <h2>Post</h2>{post.body}
            </div>
            
            </Container>
        </div>
    )
}

export default FetchData;
