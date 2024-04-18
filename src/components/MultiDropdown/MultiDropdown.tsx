import React, {useEffect, useRef, useState} from 'react';
import ArrowDownIcon from "../Icons/ArrowDownIcon";
import Input from "../Input";
// import cn from "classnames";
import styles from './MultiDropDown.module.scss'
export type Option = {
  /** Ключ варианта, используется для отправки на бек/использования в коде */
  key: string;
  /** Значение варианта, отображается пользователю */
  value: string;
};

/** Пропсы, которые принимает компонент Dropdown */
export type MultiDropdownProps = {
  className?: string;
  /** Массив возможных вариантов для выбора */
  options: Option[];
  /** Текущие выбранные значения поля, может быть пустым */
  value: Option[];
  /** Callback, вызываемый при выборе варианта */
  onChange: (value: Option[]) => void;
  /** Заблокирован ли дропдаун */
  disabled?: boolean;
  /** Возвращает строку которая будет выводится в инпуте. В случае если опции не выбраны, строка должна отображаться как placeholder. */
  getTitle: (value: Option[]) => string;
};

const MultiDropdown: React.FC<MultiDropdownProps> = ({
                                                         options,
                                                         value,
                                                         onChange,
                                                         getTitle,
                                                         disabled,
                                                     }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [filterValue, setFilterValue] = useState('');
    const dropdownRef = useRef<HTMLInputElement>(null);
    const [isFilter, setIsFilter] = useState(false)

    const handleOutsideClick = (e: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
            setShowDropdown(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    const filteredOptions = options.filter((option) =>
        option.value.toLowerCase().includes(filterValue.trim().toLowerCase())
    );

    const handleOptionClick = (selectedOption: Option) => {
        const keysArray = value.map(item => item.key);
        const sov = keysArray.includes(selectedOption.key)
            const newValue = sov
            ? value.filter((option) => option.key !== selectedOption.key)
            : [...value, selectedOption];
                onChange(newValue);
                setIsFilter(false)

    };

    return (
        <div  ref={dropdownRef}>
            <Input
                type="text"
                placeholder={getTitle(value)}
                value={isFilter ? filterValue : value.length ? getTitle(value) : ''}
                onChange={(e) => {
                    setIsFilter(true)
                    setFilterValue(e)
                }}
                onClick={() => setShowDropdown(true)}
                disabled={disabled}
                afterSlot={<ArrowDownIcon color="secondary" />}
            />
            {showDropdown && !disabled && (
                <ul className={styles.listWrapper}>
                    {filteredOptions.map((option) => (
                        <li className={styles.item} key={option.key} onClick={() => handleOptionClick(option)}>
                            {option.value}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};


export default MultiDropdown;
