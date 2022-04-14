import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, CircularProgress } from "@mui/material";

// import components
// import { getJobs } from "../../service/api";
import Filter from './Filter';
import FilteredPosings from './FilteredPosting';
import Posting from './Posting';


const Job =()=> {

    const [jobs, setJobs] = useState([]);
    const [options, setOptions] = useState();
    const [filteredJobs, setFilteredJobs] = useState();

    const [selectedLocation, setSelectedLocation] = useState('ALL');
    const [selectedTeam, setSelectedTeam] = useState('ALL');
    const [selectedType, setSelectedType] = useState('ALL');

    const [isLoading, setIsLoading] = useState(false);
    const [filtered, setFiltered] = useState(false);


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
      // let filterLocation = jobs.filter(job => job.categories.location == option.target.value);
      // setJobs(filterLocation);
      setSelectedLocation(option.target.value);
      filteredPostings(option);
      setFiltered(true);
    }

    const handleTeamValue = (option) => {
      // let filterTeam = jobs.filter(job => job.categories.team == option.target.value);
      // setJobs(filterTeam);
      filteredPostings(option);
      setFiltered(true);
      setSelectedTeam(option.target.value);
    }

    const handleTypeValue = (option) => {
      let filterType = jobs.filter(job => job.categories.commitment == option.target.value);
      setJobs(filterType);
      setSelectedType(option.target.value);
    }

    console.log('jobs:', jobs);

    const filteredPostings = (option) => {

      let optValue = option.target.value;
      const locationNames = [...new Set(options?.map(option=> option.categories.location))];

      if(optValue  == "ALL"){
        setFilteredJobs(jobs);
      } else if (locationNames.includes(optValue)) { 
        let filterLocation = jobs.filter(job => job.categories.location == optValue);
        setFilteredJobs(filterLocation);
        setSelectedTeam('ALL')
      } else {
        let filterTeam = jobs.filter(job => job.categories.team == optValue);
        setFilteredJobs(filterTeam);
      }
    }

    console.log('setFiterend', filteredJobs)
 


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
          { isLoading ? <CircularProgress className="progress" /> 
            :  filtered ? <FilteredPosings filteredJobs={filteredJobs} />
            : <Posting jobs={jobs} /> 
          }
      </Box>
    );
  }
  
  export default Job;