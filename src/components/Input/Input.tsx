import React, {Ref} from 'react';
// import cn from "classnames";
import styles from './Input.module.scss'

export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'value'
> & {
  /** Значение поля */
  value: string;
  /** Callback, вызываемый при вводе данных в поле */
  onChange: (value: any) => void;
  /** Слот для иконки справа */
  afterSlot?: React.ReactNode;
};


const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ value, onChange, afterSlot, ...props }, ref: Ref<HTMLInputElement>) => {
    return (
        <div className={styles.inputWrapper}>
          <input
              onChange={(e) => onChange(e.target.value)}
              {...props}

              type='text'
              disabled={props.disabled || false}
              ref={ref}
              value={value}

              data-testid="input"
          />
          {afterSlot && afterSlot}
        </div>
    )
  });

export default Input;
