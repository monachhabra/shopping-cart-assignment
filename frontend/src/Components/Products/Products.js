import React from 'react'
import {Grid,Paper} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const Products = () => {
    return (
        <div>
          <Grid container direction="column" spacing={3}>
              <Grid item> This is header content </Grid>
              <Grid item container> 
              <Grid item xs={2}/>
              This is header content
              This is header content
              This is header content
              This is header content
              This is header content
              This is header content
              This is header content
              This is header content
               </Grid>
                <Grid item xs={10}/>
                 
              </Grid>
        </div>
    )
}

export default Products
