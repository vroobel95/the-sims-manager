import { FC } from 'react';
import cx from 'clsx';
import styles from './Button.module.scss';
import { Label } from '../Label/Label';
import { IconSpecificProps } from '../Icon/Icon';

interface ButtonCommonProps {
  className?: string;
  onClick?: () => void;
}

type ButtonDataProps =
  | {
      label: string;
      icon?: never;
      iconPosition?: never;
    }
  | {
      label?: never;
      icon: FC<IconSpecificProps>;
      iconPosition?: 'left' | 'right';
    }
  | {
      label: string;
      icon: FC<IconSpecificProps>;
      iconPosition?: 'left' | 'right';
    };

export type ButtonProps = ButtonCommonProps &
  ButtonDataProps;

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  className,
  icon,
  iconPosition = 'left',
}) => {
  const iconPositionFlag =
    icon && label ? iconPosition : undefined;

  const buttonClasses = cx(
    styles['button'],
    {
      [styles[`icon-${iconPositionFlag}`]]:
        iconPositionFlag,
    },
    className,
  );

  const ComponentIcon = icon || (() => null);

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
    >
      <div
        className={cx(styles['button__content'], {
          [styles[
            `button__content--icon-${iconPositionFlag}`
          ]]: iconPositionFlag,
        })}
      >
        {label && (
          <Label
            className={styles['button__label']}
            tag={'span'}
          >
            {label}
          </Label>
        )}
        <ComponentIcon
          className={cx(styles['button__icon'], {
            [styles[
              `button__content--icon-${iconPositionFlag}`
            ]]: iconPositionFlag,
          })}
        />
      </div>
    </button>
  );
};
