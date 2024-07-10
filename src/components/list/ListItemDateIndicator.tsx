import {List, Text} from 'react-native-paper';
import {itemType} from '../../types/types';

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
        return <Text variant="labelMedium"> Valor:${data.Valor}</Text>;
      }}
    />
  );
};

export default ListItemDateIndicator;
