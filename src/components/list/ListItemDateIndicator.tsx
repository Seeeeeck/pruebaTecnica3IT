import {List, Text} from 'react-native-paper';
import {itemType} from '../../types/types';
import {memo} from 'react';

interface IndicatorValue {
  Fecha: string;
  Valor: string;
}
const ListItemDateIndicator: React.FC<IndicatorValue> = (
  data: IndicatorValue,
) => {
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
