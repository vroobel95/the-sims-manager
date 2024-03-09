import {
  ToastContainer,
  toast,
} from 'react-toastify';
import { CloseButtonProps } from 'react-toastify/dist/components';
import {
  ToastIcon,
  ToastOptions,
} from 'react-toastify/dist/types';
import { Button } from '../Button/Button';
import { Label } from '../Label/Label';
import { ReactComponent as IconError } from '../../../assets/icons/error.svg';
import { ReactComponent as IconInfo } from '../../../assets/icons/info.svg';
import { ReactComponent as IconSuccess } from '../../../assets/icons/check.svg';
import { ReactComponent as IconWarning } from '../../../assets/icons/warning.svg';
import styles from './StickyAlert.module.scss';
import { IconClose } from '../Icons/Close';

export enum Types {
  INFO = 'info',
  SUCCESS = 'success',
  WARNING = 'warning',
  ERROR = 'error',
}

export const StickyAlert: React.FC = () => {
  return (
    <div>
      <ToastContainer
        limit={2}
        toastClassName={styles['Toastify__toast']}
        bodyClassName={
          styles['Toastify__toast-body']
        }
        className={styles['Toastify__container']}
        closeButton={CloseButton}
        theme="dark"
      />
    </div>
  );
};

const CloseButton = ({
  closeToast,
}: CloseButtonProps) => (
  <Button
    onClick={() =>
      closeToast(
        {} as unknown as React.MouseEvent<HTMLElement>,
      )
    }
    icon={IconClose}
  />
);

export const CreateStickyAlert = (
  label: string,
  closeTime?: number,
) => {
  toast(<Label>{label}</Label>, {
    //autoClose: closeTime ?? 3000,
    autoClose: false,
    hideProgressBar: true,
    closeOnClick: true,
    position: 'bottom-left',
  });
};

const setAlertConfig = (
  closeTime?: number,
  icon?: ToastIcon,
): ToastOptions => {
  return {
    autoClose: closeTime ?? 30000,
    hideProgressBar: true,
    closeOnClick: true,
    position: 'bottom-left',
    icon: icon,
  };
};

export const CreateAlert = (
  label: string,
  type?: Types,
  closeTime?: number,
) => {
  switch (type) {
    case Types.INFO:
      return toast.info(
        <Label>{label}</Label>,
        setAlertConfig(closeTime, IconInfo),
      );
    case Types.SUCCESS:
      return toast.success(
        <Label>{label}</Label>,
        setAlertConfig(closeTime, IconSuccess),
      );
    case Types.WARNING:
      return toast.warning(
        <Label>{label}</Label>,
        setAlertConfig(closeTime, IconWarning),
      );
    case Types.ERROR:
      return toast.error(
        <Label>{label}</Label>,
        setAlertConfig(closeTime, IconError),
      );
    default:
      return toast(
        <Label>{label}</Label>,
        setAlertConfig(closeTime, IconInfo),
      );
  }
};
