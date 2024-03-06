'use client'

import { LikeProps } from "./Like.props";
import styles from './Like.module.css';
import Svglike from '@/public/like.svg';
import cn from "classnames";
import { useEffect, useState } from "react";

export const Like = ({children, likeCounts, isLiked = false, sendLike}:LikeProps):JSX.Element =>{
    const [likefill, setLikeFill] = useState<boolean>(isLiked)
    const [likes, setLikes] = useState<JSX.Element>(<></>)

    useEffect(()=>{
        createLike()
    },[likefill]);

    const setLike = () =>{
        if(!sendLike){
            return
        }
       setLikeFill(!likefill)
       !likefill ? sendLike(likeCounts + 1) : sendLike(likeCounts - 1)
    }
    
    const createLike = () => {
        const updateLike = () =>{
        return (
            <span className={cn(styles.like,{
                [styles.isLike]: likefill
            })}
                >
            {likeCounts}
            <Svglike onClick={setLike}/>
            {children}
            </span>
        ); 
    }
    setLikes(updateLike)}

    return (
        <>
            {likes}
        </>
    );
};

