import Link from "next/link";
import styles from "./styles.module.css";

export default function Navbar(): JSX.Element {
  return (
    <nav className={styles.navbar}>
      <Link href={'/'} className={styles.mylinks}>Hola</Link>
      <Link href={'/pepe'} className={styles.mylinks}>pepe</Link>
    </nav>
  );
}