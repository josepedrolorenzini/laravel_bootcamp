import React from 'react'
import styles from "../page.module.css";
interface portfolio{
    content: string;  // este es el contenido que va en el componente page
 
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function page(props: portfolio): JSX.Element {
    const content = "portafolio" ;
  return (
    <div className={styles.page}>
    {content}
     </div>
  )
}
