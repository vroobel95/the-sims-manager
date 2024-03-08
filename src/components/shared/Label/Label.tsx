import { ReactNode } from "react";
import cx from 'clsx';
import styles from './Label.module.scss';

interface LabelProps {
    tag?: 'p' | 'span' | 'label';
    className?: string;
    children: ReactNode;
    inputId?: string;
}

export const Label: React.FC<LabelProps> = ({
    tag,
    className,
    children,
    inputId
}) => {
    const Component = tag ? tag : 'label';
    const labelClasses = cx(styles['label'], className);

    return (
        <Component
            htmlFor={inputId}
            className={labelClasses}
        >
            {children}
        </Component>
    )
}