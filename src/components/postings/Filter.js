import React from "react";


const Filter =({options, selectedLocation, selectedTeam, selectedType, handleLocationValue, handleTeamValue, handleTypeValue})=> {
  
    // get unique option value for select
    const locationNames = [...new Set(options?.map(option=> option.categories.location))];
    const TeamNames = [...new Set(options?.map(option=> option.categories.team))];
    const WorkTypeNames = [...new Set(options?.map(option=> option.categories.commitment))];


    return (
         <div className="filter-wrapper wrapper">

          <h5>FILTER BY:</h5>

          <div className="select-wrapper">
            <select value={selectedLocation} onChange={handleLocationValue}>
              <option value={"ALL"}>ALL LOCATIONS</option>
              {locationNames.map((location, index)=>(
                <option key={index} value={location}>{location}</option>
              ))}
            </select>
          </div>

          <div className="select-wrapper">
            <select value={selectedTeam} onChange={handleTeamValue}>
              <option value={"ALL"}>ALL TEAMS</option>
              {TeamNames.map((team, index)=>(
                <option key={index} value={team}>{team}</option>
              ))}
            </select>
          </div>

          <div className="select-wrapper">
            <select value={selectedType} onChange={handleTypeValue}>
              <option value={"ALL"}>ALL WORK TYPES</option>
              {WorkTypeNames.map((type, index)=>(
                <option key={index} value={type}>{type}</option>
              ))}
            </select>
          </div>

         </div>
    );
  }
  
  export default Filter;
