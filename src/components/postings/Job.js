import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Box, Grid, Typography } from "@mui/material";

// import components
// import { getJobs } from "../../service/api";
import Filter from './Filter';
import Posting from './Posting';



function Job() {

    const [jobs, setJobs] = useState([]);

    useEffect( () => {
        getJobs();
      }, []);

    const getJobs =()=> {
        axios.get(`https://api.lever.co/v0/postings/paralleldomain?mode=json`)
        .then(response => setJobs(response.data))
        .catch(error => {
            console.error('There was an error!', error);
        });
    }

    console.log('jobs:', jobs)


    return (
      <Box sx={{ maxWidth: "1024px", width: "100%", margin: "0 auto", py: 5 }}>
          <Filter jobs={jobs}/>
          {
              jobs.map(job=>(
                  <Posting 
                    key={job.id}
                    location={job.categories.location}
                    team={job.categories.team}
                    title={job.text}
                    url={job.hostedUrl}
                  />
              ))
          }
      </Box>
    );
  }
  
  export default Job;