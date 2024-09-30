
import Image from "next/image";
import Link from "next/link";
import fs from 'fs';
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
import path from "path";
interface User {
	id: number;
	task: string;
}
export default async function Home() {
  // const res = await fetch("https://jsonplaceholder.typicode.com/users");
  // const users: User[] = await res.json();

  // Определяем путь к файлу
  const filePath = await path.join(process.cwd(), 'temp-data/data', 'data.json');
  
  // Читаем файл
  const jsonData = await fs.readFileSync(filePath, 'utf-8');

  // Преобразуем JSON в объект
  const users: User[] = await JSON.parse(jsonData);
  // const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  // const res = await fetch(`${baseUrl}/data/data.json`);
  // const users: User[] = await res.json();
  return (

    <main>
      
        <h1 className={styles.Title}>Добро пожаловать на сайт!</h1>
      
      <div className={styles.block}>
        <ul >
        <li><button className={styles.Button} ><Link href="/CreateTask">Создать задачу</Link></button></li>
        <li><button className={styles.Button} ><Link href="/login">Войти</Link></button></li>
        <li><button className={styles.Button} ><Link href="/avatar">Аватар</Link></button></li>
        <li><button className={styles.Button} ><Link href="/exit">Выйти</Link></button></li>

        </ul>
      </div>
          
      <Link href="/users">Users</Link>
      

      <Table>
  <TableHeader>
    <TableRow>
      <TableHead>Заголовок задачи</TableHead>
      <TableHead>Действия</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {users.map(user => (
      <TableRow key={user.id}>
        <TableCell>{user.task}</TableCell>
        <TableCell>
          <button>Редактировать</button>
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>

    </main>
  );
  
  
  
}


 
 
