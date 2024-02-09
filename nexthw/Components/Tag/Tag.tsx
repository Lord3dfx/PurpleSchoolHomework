import { TagProps } from "./Tag.props";
import styles from './Tag.module.css';
import cn from 'classnames';

export const Tag = ({size = 'm', children, href, className, fontw = 'regular', isref= 'false', ...props}:TagProps):JSX.Element =>{
    return(
        <p className={cn(styles.tag,className,{
            [styles.s]: size == 's',
            [styles.m]: size == 'm',
            [styles.l]: size == 'l',
            [styles.regular]: fontw == 'regular',
            [styles.bold]: fontw == 'bold',
            [styles.light]: fontw == 'light',
            [styles.isref]: isref == 'true'
        })}{...props}>
          {href? <a href={href}>{children}</a>: <>{children}</>}
        </p>
    );
};