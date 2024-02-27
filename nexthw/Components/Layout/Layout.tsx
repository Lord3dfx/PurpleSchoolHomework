import styles from './Layout.module.css';
import { useState } from 'react';
import {Descript, Like, Tag} from '@/Components';
import Image from 'next/image';

export const Layout = ():JSX.Element =>{

    const [like, setLikes] = useState<number>(4)

  const setLike = (i:number) =>{
    fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',
  body: JSON.stringify({
    title: 'foo',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
  setLikes(i)
  }


    return(
        <div className={styles.layout}>
            <Image src="/gridimage.jpg"
        alt='Картинка'
        width={345}
        height={250}/>
        <Tag fontw='bold'>Front-end</Tag>
        <Tag fontw='light'>1 мес. назад</Tag>
        <Like likeCounts={like} sendLike={setLike}></Like>
        <Tag size='l' fontw='bold'>Как работать с CSS-Grid</Tag>
        <Descript>CSS Grid Layout (спецификация) или просто гриды — это удобная технология для раскладки элементов на веб-страницах.В отличие от флексбоксов, одновременно работающих только с одним измерением, гриды дают возможность...</Descript>
        <Tag>3 минуты</Tag>
        <Tag isref='true' href='/'>Читать</Tag>
        </div>
    );
};