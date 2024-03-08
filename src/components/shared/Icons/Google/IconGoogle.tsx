import { Icon, IconSpecificProps } from "../../Icon/Icon";
import { ReactComponent as Google } from '../../../../assets/icons/icons8-google.svg';

export const IconGoogle: React.FC<IconSpecificProps> = ({...rest}) => {
    return <Icon icon={Google} {...rest}/>
}