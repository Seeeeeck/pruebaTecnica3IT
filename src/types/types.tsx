import {
  DrawerDescriptorMap,
  DrawerNavigationHelpers,
} from '@react-navigation/drawer/lib/typescript/src/types';
import {DrawerNavigationState, ParamListBase} from '@react-navigation/native';

export type DrawerNavigatorProps = {
  state: DrawerNavigationState<ParamListBase>;
  navigation: DrawerNavigationHelpers;
  descriptors: DrawerDescriptorMap;
};

export type NavigationDrawerPropsType = {
  navigation: DrawerNavigationHelpers;
};

export type ListType = {
  listItemActionName?: string;
  activeListItemAction?: boolean;
  navigation?: DrawerNavigationHelpers;
  title: string;
  type: 'text' | 'info' | 'dateIndicator';
  items?: IndicatorData[];
};

export type itemType = {
  name: string;
  label: string;
  icon: string;
  id: number;
};

export type itemTypeNavigation = {
  name: string;
  label: string;
  icon: string;
  navigation?: NavigationPropType;
  screenName?: string;
};
export type NavigationPropType = DrawerNavigationHelpers;

export type AppBarProps = {
  title: string;
  icon?: string;
  navigation?: DrawerNavigationHelpers;
  isDrawer: boolean;
};

export type MainStackParamList = {
  Home: {name: string; component: React.FC<NavigationDrawerPropsType>};
  ListFinancialIndicators: {
    name: string;
    component: React.FC<NavigationDrawerPropsType>;
  };
};

export type IndicatorValue = {
  Fecha: string;
  Valor: string;
};

export type IndicatorData = {
  Dolares: IndicatorValue[];
};
