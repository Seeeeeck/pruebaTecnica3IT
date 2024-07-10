import {Appbar} from 'react-native-paper';
import {AppBarProps} from '../../types/types';

const AppBarHeader: React.FC<AppBarProps> = (props: AppBarProps) => {
  const {isDrawer=false}=props;
  const goBack = () => {
    props?.navigation?.goBack();
  };

  const openDrawer = () => {
    props?.navigation?.openDrawer();
  };
  return (
    <Appbar.Header>
      {isDrawer ? (
        <Appbar.Action icon="menu" onPress={() => openDrawer()} />
      ) : (
        <Appbar.Action icon="arrow-left" onPress={() => goBack()} />
      )}

      {props.icon && <Appbar.Action icon={props.icon} />}

      <Appbar.Content title={props.title} />
    </Appbar.Header>
  );
};

export default AppBarHeader;
