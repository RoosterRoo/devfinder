import { Button, Paper, TextField, Typography, Avatar, Grid} from '@material-ui/core';
import React, { useCallback, useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core'
import moment from 'moment'

import moon from '../icon-moon.svg'
import company from '../icon-company.svg'
import location from '../icon-location.svg'
import twitter from '../icon-twitter.svg'
import website from '../icon-website.svg'

const useStyles = makeStyles({
    
})

const DevFinder = () => {
    const classes = useStyles()
    const [user, setUser] = useState({})
    const [changedName, setChangedName] = useState('')
    const [name, setName] = useState('octocat')

    const fetchData = useCallback(() => {
        fetch(`https://api.github.com/users/${name}`)
            .then(res => res.json())
            .then(data => setUser(data))
    },[name])

    useEffect(() => {
        fetchData()
    },[fetchData])
    return (
        <div>
            <div>
                <Typography>
                    devfinder
                </Typography>
                <div>
                    <Typography>
                        Dark
                    </Typography>
                    <img src={moon} alt="moon"/>
                </div>
            </div>
            <Paper>
                <TextField 
                    id="standard-basic" 
                    label="Search Github username..." 
                    className={classes.text} 
                    onChange={e => {
                        setChangedName(e.target.value)
                    }}/>
                <Button 
                        variant="contained" 
                        size="small" 
                        color="primary"
                        onClick={() => {
                                setName(changedName)
                                fetchData()
                            }}
                        >
                        Search
                </Button>
            </Paper>
            <Paper elevation={0}>
                <Grid container>
                    <Grid item md={3}>
                        <Avatar alt="avatar" src=""/>
                    </Grid>
                    <Grid item md={9}>
                        <Grid container>
                            <Grid item md={6}>
                                <Typography>{user.name}</Typography>
                                <Typography>{user.login}</Typography>
                                <br />
                                <Typography>{user.bio ?? "This profile has no bio"}</Typography>
                            </Grid>
                            <Grid item md={6}>
                                <Typography>{moment(user.created_at).format("D MMM YYYY")}</Typography>
                            </Grid>
                        </Grid>
                        <Paper>
                            <Grid container>
                                <Grid item md={4}>
                                    <Typography>
                                        Repos <br />
                                        {user.public_repos}
                                    </Typography>
                                </Grid>
                                <Grid item md={4}>
                                    <Typography>
                                        Followers <br />
                                        {user.followers}
                                    </Typography>
                                </Grid>
                                <Grid item md={4}>
                                    <Typography>
                                        Following <br />
                                        {user.following}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Paper> 
                        <Grid container>
                                <Grid item md={6}>
                                    <Typography>
                                        <img src={location} alt="location"/>
                                        {user.location ?? "Not Available"}
                                    </Typography>
                                    <Typography>
                                        <img src={website} alt="website"/> 
                                        {user.blog ?? "Not Available"}
                                    </Typography>    
                                </Grid>
                                <Grid item md={6}>
                                    <Typography>
                                        <img src={twitter} alt="twitter"/>  
                                        {user.twitter_username ?? "Not Available"}
                                    </Typography>
                                    <Typography>
                                        <img src={company} alt="company"/>  
                                        {user.company ?? "Not Available"}
                                    </Typography>  
                                </Grid>
                        </Grid>   
                    </Grid>
                </Grid>
            </Paper>
        </div>
        
        
    );
}
 
export default DevFinder;