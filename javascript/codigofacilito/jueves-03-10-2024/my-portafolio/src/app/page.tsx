import Image from "next/image";
import styles from "./page.module.css";

export default function Home(props:any):any {
  return (
    <div className={styles.page}>
   <h1>soy page</h1>
   {props.content}
    </div>
  );
}
