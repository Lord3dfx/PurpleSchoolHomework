import { PostData } from "@/api/post";
import { Post } from "../post-component/Post";

export default function Product() {
const post = PostData;

    return (
        <div>
            <Post {...post}/>
        </div>
    );
}