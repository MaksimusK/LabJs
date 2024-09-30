import Image from "next/image";
import Link from "next/link";
import styles from './Page.module.css'
export default function Home() {
  return (
    <main>
      <h1 >Добро пожаловать на сайт!</h1>
      <div>
        <button className={styles.Button} > <Link href="/users/new">Создать задачу</Link></button> 
        <button className={styles.Button} >Войти</button>
        <button className={styles.Button} >Аватар</button>
        <button className={styles.Button} >Выйти</button>
      </div>
      <Link href="/users">Users</Link>

    </main>
  );
}