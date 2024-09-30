import Image from "next/image";
import Link from "next/link";
import styles from './Page.module.css'
export default function Home() {
  return (
    <main>
        <h1 className={styles.Title}>Добро пожаловать на сайт!</h1>
      
      <div className={styles.block}>
        <ul >
        <li><Link href="/createTask">Создать задачу</Link></li> 
        <li><button className={styles.Button} ><Link href="/login">Войти</Link></button></li>
        <li><button className={styles.Button} ><Link href="/avatar">Аватар</Link></button></li>
        <li><button className={styles.Button} ><Link href="/exit">Выйти</Link></button></li>

        </ul>
      </div>
      <Link href="/users">Users</Link>

    </main>
  );
}