import React, {memo} from 'react';
import {Divider, List, Text} from 'react-native-paper';
import {FlatList, StyleSheet, View} from 'react-native';

import ListItemNavigation from './ListItemNavigation';
import ListItemDateIndicator from './ListItemDateIndicator';
import {NavigationProp} from '@react-navigation/native';

interface Item {
  id: number;
  label: string;
  name: string;
  icon: string;
}
interface ListComponentProps {
  listItemActionName?: string;
  activeListItemAction?: boolean;
  navigation?: NavigationProp<any, any>;
  title: string;
  type: 'text' | 'info' | 'dateIndicator';
  items?: Item[];
  indicator?: string;
}

const ListComponent: React.FC<ListComponentProps> = ({
  activeListItemAction = false,
  ...props
}) => {
  const renderItem = (item: any) => {
    if (props.type === 'dateIndicator') {
      return (
        <ListItemDateIndicator {...item.item} indicator={props?.indicator} />
      );
    }

    if (props.type === 'info') {
      return (
        <ListItemNavigation
          {...item.item}
          navigation={props.navigation}
          screenName={props?.listItemActionName}
        />
      );
    }
    return null;
  };

  return (
    <View>
      <List.Section title={props.title}>
        <FlatList
          data={props.items}
          renderItem={item => renderItem(item)}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={() => <Divider />}
        />
      </List.Section>
    </View>
  );
};

const styles = StyleSheet.create({});

export default memo(ListComponent);
