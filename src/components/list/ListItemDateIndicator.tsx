import {List, Text} from 'react-native-paper';

import {memo} from 'react';
import {StyleSheet} from 'react-native';

interface ListItemIndicatorProps {
  Fecha: string;
  Valor: string;
  indicator: string;
}
const ListItemDateIndicator: React.FC<ListItemIndicatorProps> = data => {
  return (
    <List.Item
      titleStyle={styles.titleStyle}
      title={data.Fecha}
      right={() => {
        return (
          <Text style={styles.textStyle} variant="bodyLarge">
            {' '}
            {['dolar', 'euro'].includes(data.indicator) && '$'}{data.Valor}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    color: '#023e7d',
  },
  textStyle: {color: '#023e7d'},
});
export default memo(ListItemDateIndicator);
