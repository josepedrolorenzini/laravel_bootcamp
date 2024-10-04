 import styles from "./page.module.css";
interface HomeProps {
  content: string; // Adjust this type based on your actual prop types
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Home(props:HomeProps): JSX.Element {
  const content = 'Home PAGE' ; 
  const titulo = "Homepage"
  return (
    <div className={styles.page}>
    {titulo}
   {content}
    </div>
  );
}
