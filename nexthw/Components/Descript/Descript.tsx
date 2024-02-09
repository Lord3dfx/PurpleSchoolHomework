import { DescriptProps } from "./Descript.props";
import styles from './Descript.module.css';

export const Descript = ({children}:DescriptProps):JSX.Element =>{
    return(
        <p className={styles.text}>
            {children}
        </p>
    );
};