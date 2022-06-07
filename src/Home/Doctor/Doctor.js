import { Grid } from "@mui/material";
import React from "react";

const Doctor = ({ doctor }) => {
  const { name, email, image } = doctor;
  return (
    <Grid style={{boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 12px'}} item xs={6} sm={6} md={4}>
      {/* react display base64 image */}
      <img
        style={{ width: "250px",height: "200px" }}
        src={`data:image/*;base64,${image}`}
      ></img>
      <h4>{name}</h4>
    </Grid>
  );
};

export default Doctor;
