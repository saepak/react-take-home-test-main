import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, CircularProgress } from "@mui/material";

// import components
import Filter from './Filter';
import Posting from './Posting';


const Job =()=> {

    const [jobs, setJobs] = useState([]);
    const [options, setOptions] = useState([]);

    const [selectedLocation, setSelectedLocation] = useState('ALL');
    const [selectedTeam, setSelectedTeam] = useState('ALL');
    const [selectedType, setSelectedType] = useState('ALL');

    const [isLoading, setIsLoading] = useState(false);


    // Fetch API
    useEffect( () => {
        getJobs();
        setIsLoading(false)
    }, []);

    const getJobs =()=> {

        setIsLoading(true)
        
        axios.get(`https://api.lever.co/v0/postings/paralleldomain?mode=json`)
        .then((response) => {
          setJobs(response.data);
          setOptions(response.data);
        })
        .catch(error => {
            console.error('error', error);
        });
        
    }
    console.log('jobs:', jobs);

    // handle selected value
    const handleLocationValue = (option) => {
      setSelectedLocation(option.target.value);
    }

    const handleTeamValue = (option) => {
      setSelectedTeam(option.target.value);
    }

    const handleTypeValue = (option) => {
      setSelectedType(option.target.value);
    }

    // filter job postings
    const filter = jobs.filter((job) =>
        (selectedLocation === "ALL" || job.categories.location === selectedLocation) &&
        (selectedTeam === "ALL" || job.categories.team === selectedTeam) &&
        (selectedType === "ALL" || job.categories.commitment === selectedType)
    );
 

    return (
      <Box sx={{ maxWidth: "1024px", width: "100%", margin: "0 auto", py: 5 }} style={{position:'relative'}}>
          <Filter 
            jobs={jobs}
            options={options}
            selectedLocation={selectedLocation}
            selectedTeam={selectedTeam}
            selectedType={selectedType}
            handleLocationValue={handleLocationValue}
            handleTeamValue={handleTeamValue}
            handleTypeValue={handleTypeValue}
          />
          {isLoading ?  <CircularProgress className="progress" /> :  <Posting filter={filter} />}
      </Box>
    );
  }
  
  export default Job;