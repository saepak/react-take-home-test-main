import React, {useState} from "react";
import { Box } from "@mui/material";


const Filter =({jobs, options, selectedLocation, selectedTeam, selectedType, handleLocationValue, handleTeamValue, handleTypeValue})=> {
  
    // get unique option value for select
    const locationNames = [...new Set(options?.map(option=> option.categories.location))];
    const TeamNames = [...new Set(options?.map(option=> option.categories.team))];
    const WorkTypeNames = [...new Set(options?.map(option=> option.categories.commitment))];

    // handle select value
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
         <div className="filter-wrapper wrapper">

          <h5>FILTER BY:</h5>

          <div className="select-wrapper">
            <select value={selectedLocation} onChange={handleLocationValue}>
              <option value={"ALL"}>ALL LOCATIONS</option>
              {locationNames.map((location, index)=>(<HandleLocationOptions key={index} location={location} />))}
            </select>
          </div>

          <div className="select-wrapper">
            <select value={selectedTeam} onChange={handleTeamValue}>
              <option value={"ALL"}>ALL TEAMS</option>
              {TeamNames.map((team,index)=>(<HandleTeamOptions key={index} team={team} />))}
            </select>
          </div>

          <div className="select-wrapper">
            <select value={selectedType} onChange={handleTypeValue}>
              <option value={"ALL"}>ALL WORK TYPES</option>
              {WorkTypeNames.map((type,index)=>(<HandleWorkTypeOptions key={index} type={type} />))}
            </select>
          </div>

         </div>
    );
  }
  
  export default Filter;
