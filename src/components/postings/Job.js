import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, CircularProgress } from "@mui/material";

// import components
// import { getJobs } from "../../service/api";
import Filter from './Filter';
import Posting from './Posting';


const Job =()=> {

    const [jobs, setJobs] = useState([]);
    const [options, setOptions] = useState();
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
        .then(response => (setJobs(response.data), setOptions(response.data)) )
        .catch(error => {
            console.error('error', error);
        });
        
    }


    const handleLocationValue = (option) => {
      let filterLocation = jobs.filter(job => job.categories.location == option.target.value);
      setJobs(filterLocation);
      setSelectedLocation(option.target.value);
    }

    const handleTeamValue = (option) => {
      let filterTeam = jobs.filter(job => job.categories.team == option.target.value);
      setJobs(filterTeam);
      setSelectedTeam(option.target.value);
    }

    const handleTypeValue = (option) => {
      if(option.target.value == "ALL") {
        setJobs(options)
      } else {
        setJobs(options)
        setJobs(jobs.filter(job => job.categories.commitment == option.target.value));
      }
      setSelectedType(option.target.value);
      // let filterType = jobs.filter(job => job.categories.commitment == option.target.value);
      // setJobs(filterType);
    }

    // const filterJobPostings  = jobs.filter((job) =>
    //     (selectedLocation === "All" || job.categories.location == selectedLocation) &&
    //     (selectedTeam === "All" || job.categories.team == selectedTeam) &&
    //     (selectedType === "All" || job.categories.commitment == selectedType) 
    // );


    console.log('jobs:', jobs);
    // console.log('filterJobPostings', filterJobPostings)

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
          { isLoading ? <CircularProgress className="progress" /> : <Posting jobs={jobs}/> }
      </Box>
    );
  }
  
  export default Job;