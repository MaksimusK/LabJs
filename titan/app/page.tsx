
import Image from "next/image";
import Link from "next/link";
import fs from 'fs';
import styles from './Page.module.css'
import { Button } from "./components/ui/button"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar"
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
        <li><Avatar>
        <AvatarImage src="https://cdn.iconscout.com/icon/free/png-256/free-laptop-user-icon-download-in-svg-png-gif-file-formats--workplace-office-employee-businessman-flat-business-icons-1-pack-1179329.png" />
        <AvatarFallback>CN</AvatarFallback>
        </Avatar></li>
        <li><Button asChild>
            <Link href="/CreateTask">Создать задачу</Link>
        </Button></li>
        <li><Button asChild>
            <Link href="/login">Войти</Link>
        </Button></li>
        <li><Button variant="destructive">
          <Link href="/exit">Выйти</Link>
          </Button></li>

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


 
 
