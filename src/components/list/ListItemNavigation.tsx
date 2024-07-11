import {IconButton, List, MD3Colors} from 'react-native-paper';

import {memo} from 'react';
import {NavigationProp} from '@react-navigation/native';

interface ListItemNavigationProps {
  name: string;
  label: string;
  icon: string;
  navigation?: NavigationProp<any, any>;
  screenName?: string;
}

const ListItemNavigation: React.FC<ListItemNavigationProps> = ({
  navigation,
  ...props
}) => {
  const screenName = props?.screenName ?? '';

  const navigateActiveListItem = () => {
    navigation?.navigate(screenName, {item: props});
  };
  return (
    <List.Item
      onPress={() => navigateActiveListItem()}
      title={props.label}
      left={() => <List.Icon icon={props.icon} />}
      right={() => {
        return (
          <IconButton
            icon="information-outline"
            iconColor={MD3Colors.primary40}
            size={35}
            onPress={() => navigation?.navigate('ModalDetailIndicator', props)}
          />
        );
      }}
    />
  );
};

export default memo(ListItemNavigation);
