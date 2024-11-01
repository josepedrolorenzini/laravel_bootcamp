"use client"; 

import { useParams , useRouter } from 'next/navigation'; // for app directory
// import products from '../../data'; // Ensure correct import
import './styles.module.css'
import { useState , useEffect } from 'react';


interface jobInterface {
  id: number;
  title: string;
  description: string;
  location: string;
  salary: string;
  find?:() => string,
  // Add more properties as needed for your specific job data
}

const JobId = () => {

  const [data , setData] = useState<jobInterface|null>(null);
  const [loading , setLoading] = useState(true)  ;
  const { id } = useParams(); 

  
  // Fetch the job data when component mounts
  useEffect(() => {
    if (id) {
      fetch(`http://localhost:8000/jobs/${id}`)
        .then((response) => response.json())
        .then((jobData) => {
          setData(jobData);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error:', error);
          setLoading(false);
        });
    }
  }, [id]); // Fetch again if `id` changes


  // Remover este codigo
  // const router = useRouter();  // remover

  // Use `useParams` for dynamic routing in app directory structure

  //  navigation router
  const router = useRouter();  // remover
 
  
  // Handle navigation
  const handleNavigation = () => {
    router.back();
  };
   console.log(data);
  

   if (loading) {
    return <div>Loading...</div>;
  }
  // Fetch the product data and display it here
  //const product = data.find((p: any) => p.id === Number(id)); 

  // Handle case where product is not found
  if (!data) {
    return <div>Product not found</div>;
  }

  return (
    <div className='container'>
      <div className="product">
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <p className="price">Price: ${data.location}</p>
      <button
      type="button" 
      onClick={handleNavigation} 
      className='goBack'>Go Back</button>
      </div>
    </div>
  );
};

export default JobId;
