import {ReactElement} from "react";

import styles from './hTag.module.css'
import cn from "classnames";

interface hTagProps {
    tag: string,
    children?: ReactElement | string,
    className?: string,
    style?: object,
}

export const HTag = ({ tag, children, className, ...props }: hTagProps): ReactElement => {
    switch (tag) {
        case 'h1':
            return <h1 className={cn(styles.h1, className)} {...props}>{children}</h1>
        case 'h2':
            return <h2 className={cn(styles.h2, className)} {...props}>{children}</h2>
        case 'h3':
            return <h3 className={cn(styles.h3, className)} {...props}>{children}</h3>
        case 'h4':
            return <h4 className={cn(styles.h4, className)} {...props}>{children}</h4>
        default:
            return <span>{children}</span>
    }
};