import {Appbar} from 'react-native-paper';
import {AppBarProps} from '../../types/types';

const AppBarHeader: React.FC<AppBarProps> = (props: AppBarProps) => {
  const {isHome = false} = props;
  const goBack = () => {
    props?.navigation?.goBack();
  };

  return (
    <Appbar.Header>
      {!isHome && <Appbar.Action icon="arrow-left" onPress={() => goBack()} />}

      {props.icon && <Appbar.Action icon={props.icon} />}

      <Appbar.Content title={props.title} />
    </Appbar.Header>
  );
};

export default AppBarHeader;
