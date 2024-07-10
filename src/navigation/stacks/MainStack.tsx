import HomeScreen from '../../screens/HomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {MainStackParamList} from '../../types/types';
import {ScreenContainerProps} from 'react-native-screens';
import ListFinancialIndicatorsScreen from '../../screens/ListFinancialIndicatorsScreen';

const MainStackNavigator = createStackNavigator<MainStackParamList>();



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
    </MainStackNavigator.Navigator>
  );
};

export default MainStack;
