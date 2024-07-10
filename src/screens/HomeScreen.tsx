import React from 'react';

import {View} from 'react-native';
import {NavigationDrawerPropsType} from '../types/types';
import AppBarHeader from '../components/bars/AppBarHeader';
import ListComponent from '../components/list/ListComponent';

const HomeScreen: React.FC<NavigationDrawerPropsType> = (
  props: NavigationDrawerPropsType,
) => {
  const items = [
    {id: 1, label: 'Dólar', name: 'dolar', icon: 'currency-usd'},
    {id: 2, label: 'Euro', name: 'euro', icon: 'currency-eur'},
    {id: 3, label: 'IPC', name: 'ipc', icon: 'finance'},
    {id: 4, label: 'UF', name: 'uf', icon: 'hand-coin-outline'},
    {id: 5, label: 'UTM', name: 'utm', icon: 'credit-card-search-outline'},
  ];
  return (
    <View>
      <AppBarHeader
        title="Indicadores financieros"
        isDrawer={true}
        navigation={props.navigation}
      />
      <ListComponent
        title="Indicadores"
        items={items}
        type="info"
        listItemActionName="ListFinancialIndicators"
        activeListItemAction={true}
        navigation={props.navigation}
      />
    </View>
  );
};

export default HomeScreen;
