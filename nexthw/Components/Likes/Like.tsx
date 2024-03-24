'use client'

import { LikeProps } from "./Like.props";
import styles from './Like.module.css';
import Svglike from '@/public/like.svg';
import cn from "classnames";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "@/context/app.context";

export const Like = ({children, isLiked = false}:LikeProps):JSX.Element =>{
    const [likefill, setLikeFill] = useState<boolean>(isLiked)
    const [like, setLike] = useState<JSX.Element>(<></>)
    const {likes, setLikes} = useContext(AppContext)

    useEffect(()=>{
        createLike()
    },[likefill]);

    const sendLike = () =>{
        if(!setLikes){
            return null
        }
       setLikeFill(!likefill)
       !likefill ? setLikes(likes + 1) : setLikes(likes - 1)
    }
    
    const createLike = () => {
        const updateLike = () =>{
        return (
            <span className={cn(styles.like,{
                [styles.isLike]: likefill
            })}
                >
            {likes}
            <Svglike onClick={sendLike}/>
            {children}
            </span>
        ); 
    }
    setLike(updateLike)}

    return (
        <>
            {like}
        </>
    );
};

