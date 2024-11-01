"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link' ; 


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
    <div className='container'>

      <h2 className='content-center'>job page</h2>
      {data.map( job => {
        return (
          <div key={job.id} className='container'>
           <Link href={`/jobs/${job.id}`} >  
           <h2 className="title">{job.title}</h2> 
           </Link>
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
