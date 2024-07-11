import  React, { memo } from 'react';
import {List} from 'react-native-paper';
import {ListType} from '../../types/types';
import {FlatList, StyleSheet, View} from 'react-native';
import ListItem from './ListItem';
import ListItemNavigation from './ListItemNavigation';
import ListItemDateIndicator from './ListItemDateIndicator';

const ListComponent: React.FC<ListType> = ({
  activeListItemAction = false,
  ...props
}: ListType) => {
  const renderItem = (item: any) => {
    if (props.type === 'dateIndicator') {
      return <ListItemDateIndicator {...item.item} />;
    }
    if (props.type === 'text') {
      return <ListItem {...item.item} />;
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
        />
      </List.Section>
    </View>
  );
};

const styles = StyleSheet.create({});

export default memo(ListComponent);
