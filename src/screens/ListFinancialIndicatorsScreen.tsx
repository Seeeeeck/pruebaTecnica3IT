import {View} from 'react-native';
import AppBarHeader from '../components/bars/AppBarHeader';
import {itemType, NavigationPropType,IndicatorData} from '../types/types';

import {RouteProp} from '@react-navigation/native';
import ListComponent from '../components/list/ListComponent';
import useFinancialIndicators from '../hooks/useGetFinancialIndicators';
import LoadingIndicator from '../components/loading/LoadingIndicator';

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
  const date = new Date()
  const {item} = route.params;

  const {indicators:dataIndicators, loading, error} = useFinancialIndicators({
    indicatorName: item.name,
    month: date.getMonth(),
    year: date.getFullYear(),
  });

  const indactorsItems: IndicatorData[] = dataIndicators;
  return (
    <View style={{height: '100%'}}>
      {loading && <LoadingIndicator />}

      <AppBarHeader
        title={item.label}
        icon={item.icon}
        isDrawer={false}
        navigation={navigation}
      />
   
      <ListComponent type="dateIndicator" title={""} items={indactorsItems} />
    </View>
  );
};

export default ListFinancialIndicatorsScreen;
