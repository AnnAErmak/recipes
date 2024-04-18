import cn from "classnames";
import React from 'react';
// import Loader from "../Loader";
import styles from './Button.module.scss'
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  /** Состояние загрузки */
  loading?: boolean;
  /** Текст кнопки */
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({loading,  children, ...props}) => {

  // const cln = cn(styles.button, props.className,{
  //   [styles.loading]: loading && !props.disabled,
  //   [styles.loadingDisable]: loading && props.disabled,
  //       [styles.Disable]: !loading && props.disabled
  // })

  return(
      <button
          {...props}
          className={cn(props.className, styles.button)}
          // disabled = {loading || props.disabled}

      >
        {/*{loading && <Loader size={'s'}/>}*/}
        {children}

      </button>
  )
};

export default Button;
