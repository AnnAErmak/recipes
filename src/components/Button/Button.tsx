import cn from "classnames";
import * as React from 'react';
import Text from "../Text";
import styles from './Button.module.scss'
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  /** Состояние загрузки */
  loading?: boolean;
  /** Текст кнопки */
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
    className,
    loading,
    disabled,
    children,
    ...props
}) => {
  return(
      <button
          className={cn(
              className ? className: '',
              styles.button,
              disabled ? styles.button_disabled: '',
          )}
          disabled = {disabled || loading}
          {...props}
      >
        {loading && <loader size={'s'}/>}
        <Text tag={'span'} view={"button"}>
            {children}
        </Text>
      </button>
  )
};

export default Button;
