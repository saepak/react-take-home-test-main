import React, { useState } from 'react';
import { Box, Grid, Typography } from "@mui/material";


function Posting({id, location, team, title, url}) {

    return (
      <Box sx={{ maxWidth: "1024px", width: "100%", margin: "0 auto", py: 5 }}>
            <div>{title}</div>
            <div>{location} / {team}</div>
            <div>{id}</div>
            <a target="_" href={url}>Apply</a>
      </Box>
    );
  }
  
  export default Posting;