import cx from 'clsx';
import styles from './ModalView.module.scss';

interface ModalViewProps {
  className?: string;
  size?: string;
}

export const ModalView: React.FC<
  React.PropsWithChildren<ModalViewProps>
> = ({
  className,
  size = 'normal',
  children,
}) => {
  return (
    <>
      <div
        className={cx(
          styles['modal-view__backdrop'],
        )}
      >
        {size === 'full-screen' ? (
          <div
            className={cx(
              styles['modal-view'],
              styles['modal-view__full-screen'],
            )}
          >
            {children}
          </div>
        ) : (
          <div
            className={cx(
              className,
              styles['modal-view'],
              styles['modal-view__normal'],
            )}
          >
            {children}
          </div>
        )}
      </div>
    </>
  );
};
