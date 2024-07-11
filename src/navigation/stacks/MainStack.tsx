import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationDrawerPropsType} from '../../types/types';
import {ScreenContainerProps} from 'react-native-screens';
import ListFinancialIndicatorsScreen from '../../screens/ListFinancialIndicatorsScreen/ListFinancialIndicatorsScreen';
import ModalDetailIndicatorsScreen from '../../screens/ModalDetailIndicatorScreen/ModalDetailIndicatorScreen';
import ModalDetailIndicatorScreen from '../../screens/ModalDetailIndicatorScreen/ModalDetailIndicatorScreen';

const MainStackNavigator = createStackNavigator<MainStackParamList>();

export type MainStackParamList = {
  Home: {name: string; component: React.FC<NavigationDrawerPropsType>};
  ListFinancialIndicators: {
    name: string;
    component: React.FC<NavigationDrawerPropsType>;
  };
  ModalDetailIndicator: {
    name: string;
    component: React.FC<NavigationDrawerPropsType>;
  };
};

const MainStack: React.FC<ScreenContainerProps> = () => {
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
        options={{presentation: 'modal',headerShown:false}}
        name="ModalDetailIndicator"
        component={ModalDetailIndicatorScreen}
      />
    </MainStackNavigator.Navigator>
  );
};

export default MainStack;
