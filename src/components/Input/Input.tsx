import cn from "classnames";
import * as React from 'react';
import styles from './Input.module.scss'

export type InputProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'onChange' | 'value'
> & {
  /** Значение поля */
  value: string;
  /** Callback, вызываемый при вводе данных в поле */
  onChange: (value: string) => void;
  /** Слот для иконки справа */
  afterSlot?: React.ReactNode;
};


const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ value, onChange, afterSlot, disabled, ...props }, ref) => {

      const handleChange = React.useCallback(
        (event: React.ChangeEvent<HTMLInputElement>): void => {
            onChange(event.target.value)
        },
        [onChange]
    )

      return (
        <label className={cn(

            styles.input,
            {
               [styles.input_disabled]: disabled
            }
            // disabled ? styles.input_disabled: ''
        )}>
          <input
              className={styles.input_field}
              type={"text"}
              value={value}
              onChange={handleChange}
              disabled={disabled}
              ref={ref}
              {...props}
          />
            {afterSlot && <div className={styles.input_after}>{afterSlot}</div>}
        </label>
    )
  });

export default Input;
