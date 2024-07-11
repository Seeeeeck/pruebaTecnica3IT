import React from 'react';
import {View} from 'react-native';
import AppBarHeader from '../../components/bars/AppBarHeader';
import {NavigationPropType} from '../../types/types';
import useGetDetailFinancialIndicator from '../../hooks/useGetDetailFinancialIndicator';
import {Button, Card, Divider, Text} from 'react-native-paper';
import CardStatistics from '../../components/charts/CardStatistics';
import CardLastTenDaysStatistics from './components/CardLastTenDaysStatistics';
import CardLastYearMonths from './components/CardLastYearMonths';

const ModalDetailIndicatorScreen: React.FC<NavigationPropType> = (
  props: NavigationPropType,
) => {
  const {...item} = props.route.params;
  const {name, label} = props.route.params;
  const {detail, loading} = useGetDetailFinancialIndicator({
    indicatorName: name,
  });
  console.log(name);
  return (
    <View>
      <AppBarHeader
        isHome={false}
        title={`${item.label}`}
        navigation={props.navigation}
      />

      <Card style={{margin: 8}}>
        <Card.Content>
          <Text variant="displayLarge" style={{textAlign: 'center'}}>
            ${detail.Valor}
          </Text>
          <Divider />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'baseline',
              justifyContent: 'center',
            }}>
            <Text style={{margin: 4}} variant="labelLarge">
              Nombre:
            </Text>
            <Text
              style={{margin: 4}}
              variant="labelLarge"
              style={{textAlign: 'center'}}>
              {label}
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'baseline',
              justifyContent: 'center',
            }}>
            <Text style={{margin: 4}} variant="labelLarge">
              Fecha:
            </Text>
            <Text
              style={{margin: 4}}
              variant="labelLarge"
              style={{textAlign: 'center'}}>
              {detail.Fecha}
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'baseline',
              justifyContent: 'center',
            }}>
            <Text style={{margin: 4}} variant="labelLarge">
              Unidad de medida:
            </Text>
            <Text
              style={{margin: 4}}
              variant="labelLarge"
              style={{textAlign: 'center'}}>
              Peso
            </Text>
          </View>
        </Card.Content>
      </Card>
      <View>
        {['uf', 'dolar', 'euro'].includes(name) && (
          <CardLastTenDaysStatistics name={name} />
        )}
        {(name === 'ipc' || name === 'utm' ) && (
          <CardLastYearMonths name={name} />
        )}
      </View>
    </View>
  );
};

export default ModalDetailIndicatorScreen;
