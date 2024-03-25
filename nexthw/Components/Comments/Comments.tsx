import { Tag } from "../Tag/Tag";
import { CommentsProps } from "./Comments.props";
import { api } from "@/api/api";

export  const  Comments =  async ({postID, className, ...props}:CommentsProps):Promise<JSX.Element> =>{
    const comments = await api.fetchComments(postID);

    return(
        <div {...props}>
            <Tag size='l' fontw='bold'>Комментарии</Tag>
            {comments?.map((el)=>{
                return(
                    <div key={el.id}>
                    <Tag  size='s' fontw='bold'>{el.name}</Tag>
                    <Tag  size="s" fontw="light">{el.email}</Tag>
                    <Tag  size="m" fontw="regular">{el.body}</Tag>
                    </div>
                )
            })}
        </div>
    );
};