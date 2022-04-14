import React from 'react';


const Posting = ({filteredJobs}) => {

  const TeamNames = [...new Set(filteredJobs?.map(job=> job.categories.team))];

  return (
    <>
    { TeamNames.map((team,index) => (
        <div key={index} className="team-wrapper wrapper">
          <h2>{team}</h2>
          <div className="posting-cards-wrapper">
            { filteredJobs.map((job,index)=>(
                job.categories.team === team ?
                (        
                  <a key={index} className="cards-wrapper" target="_" href={job.hostedUrl}>
                    <div className="card-box">
                        <div>
                          <h3>{job.text}</h3>
                          <h6>{job.categories.location} / {team}</h6>
                        </div>
                        <button>APPLY</button>
                    </div>
                  </a>) : null
                ))
              }
          </div>
        </div>
      ))}
    </>
  );
}
  export default Posting;