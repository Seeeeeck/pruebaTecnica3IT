import {Appbar} from 'react-native-paper';
import { NavigationProp } from '@react-navigation/native';

interface  AppBarProps  {
  title: string;
  icon?: string;
  navigation?: NavigationProp<any,any>;
  isHome: boolean;
};

const AppBarHeader: React.FC<AppBarProps> = (props) => {
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
