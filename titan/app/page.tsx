import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs"
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

import { tasks } from "@/temp-data/data/task"
interface User {
	id: number;
	task: string;
}
export default async function Home() {


  return (

    <main>
      <header>
        
        <h1 className={styles.Title}>Добро пожаловать на сайт!</h1>
      <div className={styles.block}>
        <ul >
        <li><Avatar className={styles.Button_img}>
        <AvatarImage src="https://cdn.iconscout.com/icon/free/png-256/free-laptop-user-icon-download-in-svg-png-gif-file-formats--workplace-office-employee-businessman-flat-business-icons-1-pack-1179329.png" />
        <AvatarFallback>CN</AvatarFallback>
        </Avatar></li>
        <li><Button asChild className={styles.Button}>
            <Link href="/CreateTask">Создать задачу</Link>
        </Button></li>
        <li><Button asChild className={styles.Button}>
            <Link href="/login">Войти</Link>
        </Button></li>
        <li><Button variant="destructive" className={styles.Button}>
          <Link href="/exit">Выйти</Link>
          </Button></li>

        </ul>
      </div>
          
      <Link href="/users">Users</Link>
      </header>
      
      

      <Table>
  <TableHeader>
    <TableRow>
      <TableHead>Заголовок задачи</TableHead>
      <TableHead>Действия</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {tasks.map(tasks => (
      <TableRow key={tasks.id}>
        <TableCell>{tasks.task}</TableCell>
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


 
 
