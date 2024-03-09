import React from 'react';
import {
  Icon,
  IconSpecificProps,
} from '../../Icon/Icon';
import { ReactComponent as Close } from '../../../../assets/icons/icons8-close.svg';

export const IconClose: React.FC<
  IconSpecificProps
> = ({ ...rest }) => {
  return <Icon icon={Close} {...rest} />;
};
