import { useEffect, useState } from "react";
import cx from 'clsx';
import styles from './Input.module.scss';

export interface InputProps {
    placeholder?: string;
    value?: string;
    type?: string,
    error?: string;
    label?: string;
    disabled?: boolean;
    readonly?: boolean;
    onChange?: (value: string) => void;
    className?: string;
    maxLength?: number;
}

export const Input: React.FC<InputProps> = ({
    placeholder,
    value = '',
    type = 'text',
    error,
    label,
    disabled,
    readonly,
    onChange,
    className,
    maxLength,
}) => {
    const [inputValue, setInputValue] = useState(value ? value : '');
    // const [usedType, setUsedType] = useState(type);
    
    useEffect(() => {
        if (inputValue !== value) {
            setInputValue(value)
        }
    }, [value]);

    const handleChange = (text: string) => {
        setInputValue(text);
        if (onChange) {
            onChange(text);
        }
    }

    return (
        <div className={cx(styles['input'])}>
            {label && <label className={cx(styles['input__label'])}>{label}</label>}
            <div className={cx(styles['input__wrapper'])}>
                <input
                    type={type}
                    value={inputValue}
                    onChange={(e) => {
                        handleChange(e.target.value);
                    }}
                    placeholder={placeholder}
                    disabled={disabled}
                    readOnly={readonly}
                    maxLength={maxLength}
                    className={cx(styles['input__input'])}
                />
            </div>
        </div>
    )
}