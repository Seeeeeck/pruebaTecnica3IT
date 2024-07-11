import React from 'react';

import {View} from 'react-native';
import AppBarHeader from '../../components/bars/AppBarHeader';
import ListComponent from '../../components/list/ListComponent';
import {items} from '../../utils/constItems';
import {NavigationProp} from '@react-navigation/native';
interface HomeScreenProps {
  navigation: NavigationProp<any, any>;
}
const HomeScreen: React.FC<HomeScreenProps> = props => {
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
