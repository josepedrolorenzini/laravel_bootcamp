"use client";
import { useEffect, useState } from 'react';

interface jobInterface {
  id: number;
  title: string;
  description: string;
  location: string;
  salary: string;
  // Add more properties as needed for your specific job data
}

export default function jobs() {
  // State to store fetched data
  const [data , setData] = useState<jobInterface[]>([]);

  useEffect(() => {
    fetch('http://localhost:8000/jobs')
     .then(response => response.json())
     .then(data => setData(data));
  }, []);

  return (
    <>
    <div>

      <p className='content-center'>job page</p>
      {data.map( job => {
        return (
          <div key={job.id} className='container'>
            <h2>{job.title}</h2>
            <p>{job.description}</p>
            <p>{job.location}</p>
            <p>{job.salary}</p>
          </div>
        )
      })}
    </div>
    
    
    </>
  )
}
