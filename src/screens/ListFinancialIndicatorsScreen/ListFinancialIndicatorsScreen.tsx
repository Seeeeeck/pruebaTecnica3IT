import {View} from 'react-native';
import AppBarHeader from '../../components/bars/AppBarHeader';
import {itemType, NavigationPropType, IndicatorData} from '../../types/types';

import {RouteProp} from '@react-navigation/native';
import ListComponent from '../../components/list/ListComponent';
import useFinancialIndicators from '../../hooks/useGetFinancialIndicators';
import LoadingIndicator from '../../components/loading/LoadingIndicator';
import {useEffect, useMemo, useState} from 'react';
import {Divider, Text} from 'react-native-paper';
import {useEvent} from 'react-native-reanimated';

interface Params {
  item: itemType;
}
interface Props {
  navigation: NavigationPropType;
  route: RouteProp<Record<string, Params>, string>;
}
const ListFinancialIndicatorsScreen: React.FC<Props> = ({
  navigation,
  route,
}) => {
  const date = new Date();
  const {item} = route.params;

  const {
    indicators: dataIndicators,
    loading,
    error,
  } = useFinancialIndicators({
    indicatorName: item.name,
    month: date.getMonth(),
    year: date.getFullYear(),
    month2: date.getMonth() - 1,
    year2: date.getFullYear(),
  });

  const indicatorsItems = useMemo(() => dataIndicators, [dataIndicators]);

  const [totalAverage, setTotalAverage] = useState(0);
  useEffect(() => {
    if (item.name === 'ipc' || item.name === 'utm') {
      const length = indicatorsItems.length;
      let sumTotal = 0;
      indicatorsItems.map(item => {
        sumTotal = sumTotal + parseFloat(item?.Valor);
      });
      setTotalAverage(sumTotal / length);
    }
  }, [dataIndicators]);
  return (
    <View style={{height: '100%'}}>
      {loading && <LoadingIndicator />}

      <AppBarHeader
        title={item.label}
        icon={item.icon}
        isHome={false}
        navigation={navigation}
      />

      <ListComponent type="dateIndicator" title={''} items={indicatorsItems} />

      {item.name === 'ipc' ||
        (item.name === 'utm' && (
          <View>
            <Divider />
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems:"baseline"
              }}>
              <Text variant="headlineSmall" style={{margin: 4}}>
                Total promedio:
              </Text>
              <Text variant="headlineSmall"  style={{margin: 4}}>
                ${totalAverage.toPrecision(5)}
              </Text>
            </View>
          </View>
        ))}
    </View>
  );
};

export default ListFinancialIndicatorsScreen;