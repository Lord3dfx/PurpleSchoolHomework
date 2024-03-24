
import { Like, Tag } from "@/Components/";
import { PostProps } from "./Post.props";
import Image from 'next/image';
import { ImagePaths } from "@/Components/helper";
import { Descript } from "@/Components";
import { AppContextProvider } from "@/context/app.context";

export const Post = ({title, category, date, description, likecounter, timeToRead, children}:PostProps):JSX.Element =>{
    return(
        <div>
            <AppContextProvider likes={likecounter}>
            <Tag size='l' fontw="bold" color='primary'>{title}</Tag>
            <br/>
            <Tag fontw='bold'>{category}</Tag>
            <Tag fontw='light'>{date} {timeToRead}</Tag>
            <Like />
            <Image src={ImagePaths.gridImageLarge.path}
            alt={ImagePaths.gridImageLarge.alt}
            width={ImagePaths.gridImageLarge.width}
            height={ImagePaths.gridImageLarge.height}/>
            <Descript dangerouslySetInnerHTML = {{__html: description}}></Descript>
            <Tag fontw='bold'>Понравилось? Жми</Tag>
            <Like />
            {children}
            </AppContextProvider>
        </div>
    );
};