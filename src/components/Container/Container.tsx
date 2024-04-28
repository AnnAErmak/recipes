import cn from "classnames";
import * as React from "react";
import styles from './Container.module.scss'

type ContainerProps = {
    children: React.ReactNode,
    className?: string,
}

const Container: React.FC<ContainerProps> = ({children, className}) => {
    return(
    <div className={cn(styles.container, className)}>
        {children}
    </div>
    )
}

export default Container
