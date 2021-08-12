import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';


const FetchData = () => {
    const[post, setPost] = useState({});
    const[id, setId] = useState(1);
    let[idFromButton, setIdFromButton] = useState(1);
    useEffect(() => {
        axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
        axios.get(`/posts/${idFromButton}`)
    .then(res => {
        console.log(res)
        setPost(res.data)
    })
    .catch(err => {
        console.log(err)
    })
    },[idFromButton])
    
    const handleClick = () => {
        setIdFromButton(id)
    }
    const handleKeypress = e => {
        if(e.keycode === 13) {
            handleClick()
        } 
    }
    const handleChange = e => {
        setId(e.target.value)
    }
    return (  
    <div>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
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
                value = {id} 
                onChange = {handleChange} 
                onKeyPress = {handleKeypress}
              />
            </Grid>
        </Grid>
            <Box m={1} p={2}>
                <Button 
                className = "buttonstyle" 
                type = "submit" 
                onClick = {handleClick}
                variant="contained" 
                color="primary">    
                Find Post
            </Button>
            </Box> 
            <div>
              <h2>Title</h2>{post.title} 
              <h2>Post</h2>{post.body}
            </div>
        </div>
    )
}

export default FetchData;
