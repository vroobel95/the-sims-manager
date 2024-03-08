import cx from "clsx";
import styles from './Heading.module.scss';

export interface HeadingProps {
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    className?: string;
    children: React.ReactNode;
}

export const Heading: React.FC<HeadingProps> = ({
    tag = 'h1',
    className = '',
    children
}) => {
    const Component = tag;

    return (
        <Component className={cx(styles['heading'], className)}>
            {children}
        </Component>
    )
}