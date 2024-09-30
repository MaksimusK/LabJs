
import Image from "next/image";
import Link from "next/link";
import styles from './Page.module.css'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
export default function Home() {
  return (
    <main>
      
        <h1 className={styles.Title}>Добро пожаловать на сайт!</h1>
      
      <div className={styles.block}>
        <ul >
        <li><button className={styles.Button} ><Link href="/createTask">Создать задачу</Link></button></li>
        <li><button className={styles.Button} ><Link href="/login">Войти</Link></button></li>
        <li><button className={styles.Button} ><Link href="/avatar">Аватар</Link></button></li>
        <li><button className={styles.Button} ><Link href="/exit">Выйти</Link></button></li>

        </ul>
      </div>
      <Link href="/users">Users</Link>

    </main>
  );
}

 
 
