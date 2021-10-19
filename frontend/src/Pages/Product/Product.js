import React from 'react'
import {Grid,Paper} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ProductContent from './ProductContent'

const Products = () => {
    return (
        <div>
          <Grid container direction="column" spacing={5}>
              <Grid item> This is header content </Grid>
              <Grid item container> 
              <Grid item xs={0} sm={2}/>
              <Grid item xs={8}>
              <ProductContent/>
               </Grid>
                
                 </Grid>
                 <Grid item xs={0} sm={2}/>
              </Grid>
        </div>
    )
}

export default Products
