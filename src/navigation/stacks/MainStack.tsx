import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import ListFinancialIndicatorsScreen from '../../screens/ListFinancialIndicatorsScreen/ListFinancialIndicatorsScreen';
import ModalDetailIndicatorScreen from '../../screens/ModalDetailIndicatorScreen/ModalDetailIndicatorScreen';
import {CompositeScreenProps } from '@react-navigation/native';

const MainStackNavigator = createStackNavigator<MainStackParamList>();

interface Item {
  id: number;
  label: string;
  name: string;
  icon: string;
}
export type MainStackParamList = {
  Home: {name: string};
  ListFinancialIndicators: {a:CompositeScreenProps<any,any>,item:Item};
  ModalDetailIndicator: {
    name: string;
  };
};

const MainStack: React.FC<MainStackParamList> = () => {
  return (
    <MainStackNavigator.Navigator initialRouteName="Home">
      <MainStackNavigator.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />

      <MainStackNavigator.Screen
        name="ListFinancialIndicators"
        component={ListFinancialIndicatorsScreen}
        options={{headerShown: false}}
      />

      <MainStackNavigator.Screen
        options={{presentation: 'modal', headerShown: false}}
        name="ModalDetailIndicator"
        component={ModalDetailIndicatorScreen}
      />
    </MainStackNavigator.Navigator>
  );
};

export default MainStack;
