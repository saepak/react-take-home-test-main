import React from "react";
import { Box } from "@mui/material";


const Filter =({jobs, handleLocationValue, handleTeamValue, handleTypeValue})=> {

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
    

    return (
      <Box sx={{ maxWidth: "1024px", width: "100%", margin: "0 auto", py: 5 }}>
         <div className="filter-wrapper">
          <h5>FILTER BY:</h5>

          <select defaultValue={"ALL LOCATIONS"} onChange={handleLocationValue}>
            <option disabled value={"ALL LOCATIONS"}>ALL LOCATIONS</option>
            {locationNames.map((location, index)=>(<HandleLocationOptions key={index} location={location} />))}
          </select>

          <select defaultValue={"ALL TEAMS"} onChange={handleTeamValue}>
            <option disabled value={"ALL TEAMS"}>ALL TEAMS</option>
            {TeamNames.map((team,index)=>(<HandleTeamOptions key={index} team={team} />))}
          </select>

          <select defaultValue={"ALL WORK TYPES"} onChange={handleTypeValue}>
            <option disabled value={"ALL WORK TYPES"}>ALL WORK TYPES</option>
            {WorkTypeNames.map((type,index)=>(<HandleWorkTypeOptions key={index} type={type} />))}
          </select>

         </div>
      </Box>
    );
  }
  
  export default Filter;
