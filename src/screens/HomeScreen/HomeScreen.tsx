import React from 'react';

import {View} from 'react-native';
import AppBarHeader from '../../components/bars/AppBarHeader';
import ListComponent from '../../components/list/ListComponent';
import {items} from '../../utils/constItems';
import {NavigationProp} from '@react-navigation/native';
import NetInfoViewStatus from '../../components/netInfoViewStatus/NetInfoViewStatus';
interface HomeScreenProps {
  navigation: NavigationProp<any, any>;
}
const HomeScreen: React.FC<HomeScreenProps> = props => {
  return (
    <NetInfoViewStatus>
      
      <AppBarHeader
        title="Indicadores financieros"
        isHome={true}
        navigation={props.navigation}
      />
      <ListComponent
        title=""
        items={items}
        type="info"
        listItemActionName="ListFinancialIndicators"
        activeListItemAction={true}
        navigation={props.navigation}
      />
    </NetInfoViewStatus>
  );
};

export default HomeScreen;
