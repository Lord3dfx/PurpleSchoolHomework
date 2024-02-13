import { LikeProps } from "./Like.props";
import styles from './Like.module.css';
import Svglike from '@/public/like.svg'

export const Like = ({children, likeCounts}:LikeProps):JSX.Element =>{
    return(
        <p className={styles.like}>
        {likeCounts}
        <Svglike />
        {children}
        </p>
    );
};