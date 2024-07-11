import {IconButton, List, MD3Colors} from 'react-native-paper';

import {memo} from 'react';
import {NavigationProp} from '@react-navigation/native';
import {StyleSheet} from 'react-native';

interface ListItemNavigationProps {
  name: string;
  label: string;
  icon: string;
  navigation?: NavigationProp<any, any>;
  screenName?: string;
}

const ListItemNavigation: React.FC<ListItemNavigationProps> = ({
  navigation,
  ...props
}) => {
  const screenName = props?.screenName ?? '';

  const navigateActiveListItem = () => {
    navigation?.navigate(screenName, {item: props});
  };
  return (
    <List.Item
      style={style.listItem}
      onPress={() => navigateActiveListItem()}
      title={props.label}
      titleStyle={style.titleStyle}
      left={() => <List.Icon icon={props.icon} color={style.iconColor.color} />}
      right={() => {
        return (
          <IconButton
            icon="information-outline"
            iconColor={style.iconColor.color}
            size={35}
            onPress={() => navigation?.navigate('ModalDetailIndicator', props)}
          />
        );
      }}
    />
  );
};

const style = StyleSheet.create({
  listItem: {
    padding: 10,
  },
  titleStyle:{
   color:"#023e7d"
  },
  iconColor:{
    color:"#023e7d"
  }
});

export default memo(ListItemNavigation);
