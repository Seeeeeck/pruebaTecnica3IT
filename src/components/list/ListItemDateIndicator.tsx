import {List, Text} from 'react-native-paper';

import {memo} from 'react';

interface ListItemIndicatorProps {
  Fecha: string;
  Valor: string;
}
const ListItemDateIndicator: React.FC<ListItemIndicatorProps> = data => {
  return (
    <List.Item
      title={data.Fecha}
      right={() => {
        return <Text variant="labelMedium"> ${data.Valor}</Text>;
      }}
    />
  );
};

export default memo(ListItemDateIndicator);
