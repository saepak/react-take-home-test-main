import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Box, CircularProgress } from "@mui/material";

// import components
// import { getJobs } from "../../service/api";
import Filter from './Filter';
import Posting from './Posting';


const Job =()=> {

    const [jobs, setJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect( () => {
        getJobs();
        setIsLoading(false)
      }, []);

    const getJobs =()=> {
        
        setIsLoading(true)
        
        axios.get(`https://api.lever.co/v0/postings/paralleldomain?mode=json`)
        .then(response => setJobs(response.data))
        .catch(error => {
            console.error('There was an error!', error);
        });
    }

    const handleLocationValue = (option) => {
      let filterLocation = jobs.filter(job => job.categories.location == option.target.value);
      setJobs(filterLocation);
    }

    const handleTeamValue = (option) => {
      let filterTeam = jobs.filter(job => job.categories.team == option.target.value);
      setJobs(filterTeam);
    }

    const handleTypeValue = (option) => {
      let filterType = jobs.filter(job => job.categories.commitment == option.target.value);
      setJobs(filterType);
    }

    console.log('jobs:', jobs);

    return (
      <Box sx={{ maxWidth: "1024px", width: "100%", margin: "0 auto", py: 5 }}>
          <Filter 
            jobs={jobs}
            handleLocationValue={handleLocationValue}
            handleTeamValue={handleTeamValue}
            handleTypeValue={handleTypeValue}
          />
          { isLoading ? <CircularProgress /> : <Posting jobs={jobs}/> }
      </Box>
    );
  }
  
  export default Job;