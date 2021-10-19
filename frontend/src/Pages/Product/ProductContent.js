import { Grid } from "@material-ui/core";
import React from "react";
import CardComponent from "./CardComponent";
const ProductContent = () => {
  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs ={12} sm={3}><CardComponent/></Grid>
        <Grid item xs ={12} sm={3}><CardComponent/></Grid>
        <Grid item xs ={12} sm={3}><CardComponent/></Grid>
        <Grid item xs ={12} sm={3}><CardComponent/></Grid>
        
      </Grid>
    </div>
  );
};

export default ProductContent;
