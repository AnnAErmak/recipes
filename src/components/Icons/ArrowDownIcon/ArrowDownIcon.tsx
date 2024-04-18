import * as React from 'react'
import { IconProps } from '../types';
// import cn from "classnames";
import styles from './ArrowDownIcon.module.scss'

const ArrowDownIcon: React.FC<IconProps> = () =>{
        // const {color, className, width, height} = props
    return (
          <svg
              data-testid="icon"
          //     className={cn(styles.arrow, className, {
          //         [styles.primary]: color === 'primary',
          //       [styles.secondary]: color === 'secondary',
          //       [styles.accent]: color === 'accent',
          // })}
              className={styles.arrow}
               // width={width || "24" }
               // height={height || "11"}
              width={ "24" }
              height={"11"}
               viewBox="0 0 20 11"
               fill='black' xmlns="http://www.w3.org/2000/svg"
          >
              <path strokeWidth="evenodd" clipRule="evenodd" d="M0.335632 1.74741L1.66436 0.252594L10 7.66205L18.3356 0.252594L19.6644 1.74741L10 10.338L0.335632 1.74741Z" />
          </svg>
    )
}

export default ArrowDownIcon;
