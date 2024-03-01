import styles from './Layout.module.css';
import { useState } from 'react';
import {Descript, Like, Tag} from '@/Components';
import Image from 'next/image';
import {api} from '@/api/api'
import {ImagePaths} from '@/Components/helper'

export const Layout = ():JSX.Element =>{

    const [like, setLikes] = useState(4)

  const setLike = (id:number) =>{
  api.fetchAPI(()=>{setLikes(id)})
  
  }


    return(
        <div className={styles.layout}>
            <Image src={ImagePaths.gridImage.path}
        alt={ImagePaths.gridImage.alt}
        width={ImagePaths.gridImage.width}
        height={ImagePaths.gridImage.height}/>
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