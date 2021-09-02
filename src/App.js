import React from 'react'
import Container from '@material-ui/core/Container'
import DevFinder from './components/DevFinder'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    div: {
        display: "grid"
    }
})

const App = () => {
    const classes = useStyles()
    return (
       <Container className={classes.div}>
           <DevFinder />
       </Container>
    )
}
 
export default App