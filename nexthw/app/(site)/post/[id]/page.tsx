import { api } from "@/api/api";
import { IPosts } from "@/interfaces/interface";
import Link from "next/link";
import styles from './page.module.css'

export default async function Post({params}: {params: { id: string }}) {
    const post:IPosts =await api.getPost(params.id);
    return (
        <div className={styles.post}>
            <p>id:{post.id}</p>
            <p>body: {post.body}</p>
            <p>title: {post.title}</p>
            <p>userId: {post.userId}</p>
            <p className={styles.backb}><Link href={'/'}>Назад</Link></p>
        </div>
    );
}