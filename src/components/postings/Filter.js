import React, { useState } from "react";
import { Box, Grid, Typography, MenuItem } from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';




const Filter =({jobs})=> {

    const [value, setValue] = useState('All');

    const locationNames = [...new Set(jobs.map(job=> job.categories.location))];
    const TeamNames = [...new Set(jobs.map(job=> job.categories.team))];
    const WorkTypeNames = [...new Set(jobs.map(job=> job.categories.commitment))];
    

    const HandleLocationOptions = ({location}) => {
      return (<option value={location}>{location}</option>)
    }

    const HandleTeamOptions = ({team}) => {
      return (<option value={team}>{team}</option>)
    }

    const HandleWorkTypeOptions = ({type}) => {
      return (<option value={type}>{type}</option>)
    }
    
    const handleChange = (e) => {
      e.preventDefault();
      // setValue(e.target.value);
      console.log('new value:', e.target.value)
    }
    
    return (
      <Box sx={{ maxWidth: "1024px", width: "100%", margin: "0 auto", py: 5 }}>
         <Grid container spacing={2}>
          <Grid item>
            <Typography>FILTER BY:</Typography>
          </Grid>
          <Grid item>
            <select class="filter-locations" onChange={handleChange}>
              <option disabled selected>ALL LOCATIONS</option>
              {locationNames.map(location=>(<HandleLocationOptions key={location} location={location} />))}
            </select>
          </Grid>
          <Grid item>
            <select class="filter-teams" onChange={handleChange}>
              <option disabled selected>ALL TEAMS</option>
              {TeamNames.map(team=>(<HandleTeamOptions key={team} team={team} />))}
            </select>
          </Grid>
          <Grid item>
            <select class="filter-types" onChange={handleChange}>
              <option disabled selected>ALL WORK TYPES</option>
              {WorkTypeNames.map(type=>(<HandleWorkTypeOptions key={type} type={type} />))}
            </select>
          </Grid>
         </Grid>
      </Box>
    );
  }
  
  export default Filter;