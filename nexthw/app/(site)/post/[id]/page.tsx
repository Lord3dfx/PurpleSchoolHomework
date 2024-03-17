import { api } from "@/api/api";
import { IPosts } from "@/interfaces/interface";
import Link from "next/link";
import styles from './page.module.css'

export async function generateStaticParams(){
    const posts = await api.fetchPosts();
    return posts.map(page => ({id: page.id.toString()}))
}

export default async function Post({params}: {params: { id: string }}) {
    const post:IPosts | null =await api.getPost(params.id);
    if(!post){
        return null
    }
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