import { useState, useEffect } from 'react'
import { Grid } from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    root: {
        color: '#F00'
    }
})

export const MyWonderfulComponent = ({ id, options, children, count, message }) => {
    
    const classes = useStyles()

    const [sum, setSum] = useState(count)

    useEffect(() => {
        if (id && options?.params?.fields?.isDynamic) {
            setSum(prev => prev + 1)
        }
    }, []);

    console.log(sum)

    return (
        <>
            <h1 className={classes.root}>Hello World!</h1>
            <Grid container>
                <Grid item xs={12}>{children}</Grid>
            </Grid>
        </>
    )
}