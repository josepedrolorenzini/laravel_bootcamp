import React from 'react'
import styles from "./styles.module.css";
import './styles.module.css'
import Link from 'next/link' ; 
import JOB from "../data"
interface portfolio{
    content: string;  // este es el contenido que va en el componente page
 
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function page(props: portfolio): JSX.Element {
    const content = `Portafolio `;
  return (
    <div className={styles.container}>
      <h1>{content}</h1>
      {JOB.map( product => (
        <div className="product" key={product.id}>
        <Link href={`/portafolio/${product.id}`} > 
        <h2>{product.name}</h2>
        </Link>
          <p>{product.description}</p>
          <p className="price">{product.price}</p>
        </div>
      ))}
    </div>
  )
}
