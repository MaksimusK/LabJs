
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
} from "@/app/components/ui/table"
import path from "path";
interface User {
	id: number;
	task: string;
}
export default async function Home() {


  const filePath = await path.join(process.cwd(), 'temp-data/data', 'data.json');
  const jsonData = await fs.readFileSync(filePath, 'utf-8');
  const users: User[] = await JSON.parse(jsonData);

  return (

    <main>
      
        <h1 className={styles.Title}>Добро пожаловать на сайт!</h1>
      
      <div className={styles.block}>
        <ul >
        <li><button className={styles.Button_img} ><img className={styles.img} src="https://cdn.iconscout.com/icon/free/png-256/free-laptop-user-icon-download-in-svg-png-gif-file-formats--workplace-office-employee-businessman-flat-business-icons-1-pack-1179329.png"></img></button></li>
        <li><button className={styles.Button} ><Link href="/login">Войти</Link></button></li>
        <li><button className={styles.Button} ><Link href="/CreateTask">Создать задачу</Link></button></li>
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


 
 
