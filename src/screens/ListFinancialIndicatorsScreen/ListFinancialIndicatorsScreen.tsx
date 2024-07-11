import {StyleSheet, View} from 'react-native';
import AppBarHeader from '../../components/bars/AppBarHeader';

import ListComponent from '../../components/list/ListComponent';
import useFinancialIndicators from '../../hooks/useGetFinancialIndicators';
import LoadingIndicator from '../../components/loading/LoadingIndicator';
import {useEffect, useMemo, useState} from 'react';
import {Divider, Text} from 'react-native-paper';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainStackParamList} from '../../navigation/stacks/MainStack';
import NetInfoViewStatus from '../../components/netInfoViewStatus/NetInfoViewStatus';

type ListFinancialIndicatorsScreenProps = NativeStackScreenProps<
  MainStackParamList,
  'ListFinancialIndicators'
>;

const ListFinancialIndicatorsScreen: React.FC<
  ListFinancialIndicatorsScreenProps
> = ({navigation, route}) => {
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
    <NetInfoViewStatus >
      <View style={{height: '100%'}}>
        {loading && <LoadingIndicator />}

        <AppBarHeader
          title={item.label}
          icon={item.icon}
          isHome={false}
          navigation={navigation}
        />

        <ListComponent
          type="dateIndicator"
          title={''}
          items={indicatorsItems}
          indicator={item.name}
        />

        {item.name === 'ipc' ||
          (item.name === 'utm' && (
            <View>
              <Divider />
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'baseline',
                }}>
                <Text variant="headlineSmall" style={styles.textStyle}>
                  Total promedio:
                </Text>
                <Text variant="headlineSmall" style={styles.textStyle}>
                  {totalAverage.toPrecision(5)}
                </Text>
              </View>
            </View>
          ))}
      </View>
    </NetInfoViewStatus>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    padding: 4,
    color:"#023e7d"
  },
});
export default ListFinancialIndicatorsScreen;
