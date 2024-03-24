'use client'

import { api } from "@/api/api";
import { PostData } from "@/api/post";
import React, { createContext, useState } from "react";
const postData = PostData

export interface IAppContext {
    likes: number,
    setLikes?: (value: number) => void
}

export const AppContext = createContext<IAppContext>({likes: postData.likecounter});

export const AppContextProvider = ({children}: IAppContext & {children: React.ReactNode}):JSX.Element =>{
   
    const [likesState, setLikesState] = useState(postData.likecounter)
    
    const setLikes = (value: number) =>{
        
        api.fetchAPI(()=>setLikesState(value))
        
    }

    return <AppContext.Provider value={{likes: likesState, setLikes}}>
    {children}
    </AppContext.Provider>
}