'use client'

import styles from './Layout.module.css';
import {Descript, Like, Tag} from '@/Components';
import Image from 'next/image';
import {ImagePaths} from '@/Components/helper'
import { AppContext, AppContextProvider } from '@/context/app.context';
import { useContext } from 'react';


export const Layout = ({...props}):JSX.Element =>{

const likes = useContext(AppContext).likes

/*const setLike = (id:number)=>{
  if(!setLikes){
    console.log(setLikes)
    return null
  }
  setLikes(id)
}*/


    return(
      <AppContextProvider likes={props.like}>
        <div className={styles.layout}>
        <Image src={ImagePaths.gridImage.path}
        alt={ImagePaths.gridImage.alt}
        width={ImagePaths.gridImage.width}
        height={ImagePaths.gridImage.height}/>
        <Tag fontw='bold'>Front-end</Tag>
        <Tag fontw='light'>1 мес. назад</Tag>
        <Like ></Like>
        <Tag size='l' fontw='bold'>Как работать с CSS-Grid</Tag>
        <Descript>CSS Grid Layout (спецификация) или просто гриды — это удобная технология для раскладки элементов на веб-страницах.В отличие от флексбоксов, одновременно работающих только с одним измерением, гриды дают возможность...</Descript>
        <Tag>3 минуты</Tag>
        <Tag isref='true' href='/post/product'>Читать</Tag>
        </div>
        </AppContextProvider>
    );
};