import {List, Text} from 'react-native-paper';
import {itemType} from '../../types/types';

const ListItem: React.FC<itemType> = ({label,icon,name}:itemType) => {
  return (
    <List.Item
      title={label}
      left={() => <List.Icon icon={icon} />}
      right={() => {
        return <Text variant="labelMedium"> informacion</Text>;
      }}
    />
  );
};

export default ListItem;
