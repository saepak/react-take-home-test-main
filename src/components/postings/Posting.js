import React from 'react';
import { Box } from "@mui/material";


function Posting({jobs}) {
  const TeamNames = [...new Set(jobs.map(job=> job.categories.team))];
  console.log('TeamNames', TeamNames)
  return (
    <>
    {TeamNames.map(team=>(
      <div>
        <h1>{team}</h1>
      {jobs.map(job=>(
        job.categories.team === team ?
       (        
        <a className="posting-wrapper" target="_" href={job.hostedUrl}>
          <div className="posting-box">
              <div>
                <h2>{job.text}</h2>
                <h6>{job.categories.location} / {team}</h6>
              </div>
              <button>Apply</button>
          </div>
        </a>) : null
      ))
    }
      </div>
      ))}
    </>
  );
}
  export default Posting;