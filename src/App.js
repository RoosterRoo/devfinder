import React from 'react'
// import Container from '@material-ui/core/Container'
import DevFinder from './components/DevFinder'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    div: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center", 
    },
})

const App = () => {
    const classes = useStyles()
    return (
       <div className={classes.div}>
           <DevFinder />
       </div>
    )
}
 
export default App