import React from "react";
import cx from 'clsx';
import styles from './Icon.module.scss';

export type IconSpecificProps = {
    className?: string;
    width?: number;
    height?: number;
}

type IconProps = IconSpecificProps & {
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export const Icon: React.FC<IconProps> = ({
    className,
    icon,
    width,
    height
}) => {
    const iconClasses = cx(
        styles['icon'],
        className
    )

    const Component = icon;

    return (
        <span
            className={`icon ${iconClasses}`}
        >
            <Component
                className={styles['icon-svg']}
            />
        </span>
    )
}