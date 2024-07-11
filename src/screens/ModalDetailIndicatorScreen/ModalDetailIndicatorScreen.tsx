import React from 'react';
import {View} from 'react-native';
import AppBarHeader from '../../components/bars/AppBarHeader';

import useGetDetailFinancialIndicator from '../../hooks/useGetDetailFinancialIndicator';
import {Card, Divider, Text} from 'react-native-paper';
import CardLastTenDaysStatistics from './components/CardLastTenDaysStatistics';
import CardLastYearMonths from './components/CardLastYearMonths';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainStackParamList} from '../../navigation/stacks/MainStack';
import NetInfoViewStatus from '../../components/netInfoViewStatus/NetInfoViewStatus';
import LoadingIndicator from '../../components/loading/LoadingIndicator';
import {ScrollView} from 'react-native-gesture-handler';

type ModalDetailIndicatorScreenProps = NativeStackScreenProps<
  MainStackParamList,
  'ModalDetailIndicator'
>;
const ModalDetailIndicatorScreen: React.FC<
  ModalDetailIndicatorScreenProps
> = props => {
  const {...item} = props.route.params;
  const {name, label} = props.route.params;
  const {detail, loading} = useGetDetailFinancialIndicator({
    indicatorName: name,
  });

  return (
    <NetInfoViewStatus>
      <ScrollView>
        <AppBarHeader
          isHome={false}
          title={`${item.label}`}
          navigation={props.navigation}
        />
        {loading && <LoadingIndicator />}
        <View>
          <Card style={{margin: 8}}>
            <Card.Content>
              {['dolar', 'euro'].includes(name) ? (
                <Text variant="displayLarge" style={{textAlign: 'center'}}>
                  ${detail.Valor}
                </Text>
              ) : (
                <Text variant="displayLarge" style={{textAlign: 'center'}}>
                  {detail.Valor}
                </Text>
              )}

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
                <Text style={{margin: 4}} variant="labelLarge">
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
                <Text style={{margin: 4}} variant="labelLarge">
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
                <Text style={{margin: 4}} variant="labelLarge">
                  {['dolar', 'euro'].includes(name) && 'peso'}
                  {['uf'].includes(name) && 'ufs'}
                  {['utm'].includes(name) && 'utms'}
                  {['ipc'].includes(name) && 'ipc'}
                </Text>
              </View>
            </Card.Content>
          </Card>

          <View>
            {['uf', 'dolar', 'euro'].includes(name) && (
              <CardLastTenDaysStatistics name={name} />
            )}
            {(name === 'ipc' || name === 'utm') && (
              <CardLastYearMonths name={name} />
            )}
          </View>
        </View>
      </ScrollView>
    </NetInfoViewStatus>
  );
};

export default ModalDetailIndicatorScreen;
