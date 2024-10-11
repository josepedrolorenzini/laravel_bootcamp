"use client"; 

import { useParams , useRouter } from 'next/navigation'; // for app directory
import products from '../../data'; // Ensure correct import
import './styles.module.css'

const JobId = () => {

  // Use `useParams` for dynamic routing in app directory structure
  const { id } = useParams(); 

  //  navigation router
  const router = useRouter();  // remover
 
  
  // Handle navigation
  const handleNavigation = () => {
    router.back();
  };

  // Fetch the product data and display it here
  const product = products.find((p: any) => p.id === Number(id)); 

  // Handle case where product is not found
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className='container'>
      <div className="product">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p className="price">Price: ${product.price}</p>
      <button
      type="button" 
      onClick={handleNavigation} 
      className='goBack'>Go Back</button>
      </div>
    </div>
  );
};

export default JobId;
