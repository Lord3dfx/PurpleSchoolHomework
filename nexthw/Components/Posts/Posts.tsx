import styles from './Posts.module.css';
import {api} from '@/api/api'
import { IPosts } from '@/interfaces/interface';
import Link from 'next/link';


export const Posts = async () =>{
const posts= await api.fetchPosts() 
    return(
       <>{posts.map((el:IPosts)=>{return<div className={styles.wrapper}>
        <p>Post id: {el.id}</p>
         <p>Title: {el.title}</p>
         <p>Content: {el.body}</p>
         <p>User ID: {el.userId}</p>
         <p className={styles.read}><Link href={`/post/${el.id}`}>Читать</Link></p>
         </div>
        })}</>
    );
};