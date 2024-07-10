import {IconButton, List, MD3Colors} from 'react-native-paper';
import {itemTypeNavigation} from '../../types/types';

const ListItemNavigation: React.FC<itemTypeNavigation> = ({
  navigation,
  ...props
}: itemTypeNavigation) => {
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
            onPress={() => {}}
          />
        );
      }}
    />
  );
};

export default ListItemNavigation;
