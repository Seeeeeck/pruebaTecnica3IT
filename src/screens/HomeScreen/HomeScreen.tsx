import React from 'react';

import {View} from 'react-native';
import {NavigationDrawerPropsType} from '../..//types/types';
import AppBarHeader from '../../components/bars/AppBarHeader';
import ListComponent from '../../components/list/ListComponent';
import {items} from '../../utils/constItems';

const HomeScreen: React.FC<NavigationDrawerPropsType> = (
  props: NavigationDrawerPropsType,
) => {
  return (
    <View>
      <AppBarHeader
        title="Indicadores financieros"
        isHome={true}
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
