
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
interface User {
	id: number;
	name: string;
}
export default async function Home() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json();
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

      <Table>
      <TableHeader>
        <TableRow>
          {/* <TableHead className="w-[100px]">Invoice</TableHead> */}
          <TableHead>Заголовок задачи</TableHead>
          <button>Редактировать</button>
          {/* <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead> */}
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          {/* <TableCell className="font-medium">INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">$250.00</TableCell> */}
          
          <TableCell style={{width: '30%'}}>
             {users.map(user => <TableRow key={user.id}>{user.name}</TableRow>)}
          </TableCell>
          
        </TableRow>
      </TableBody>
    </Table>

    </main>
  );
}

 
 
