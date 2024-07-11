import {List, Text} from 'react-native-paper';

import {memo} from 'react';

interface ListItemProps {
  name: string;
  label: string;
  icon: string;
  id: number;
}
const ListItem: React.FC<ListItemProps> = ({label, icon}) => {
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

export default memo(ListItem);
