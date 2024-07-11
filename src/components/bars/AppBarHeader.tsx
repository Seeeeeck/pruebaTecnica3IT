import {Appbar, useTheme} from 'react-native-paper';
import {NavigationProp} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Toast from 'react-native-toast-message';
interface AppBarProps {
  title: string;
  icon?: string;
  navigation?: NavigationProp<any, any>;
  isHome: boolean;
}

const AppBarHeader: React.FC<AppBarProps> = props => {
  const {isHome = false} = props;
  const goBack = () => {
    props?.navigation?.goBack();
  };

  return (
    <Appbar.Header style={styles.appBarHeaderContinerStyle}>
    
      {!isHome && (
        <Appbar.Action icon="arrow-left" color={styles.iconStyle.color} onPress={() => goBack()} />
      )}

      {props.icon && <Appbar.Action color={styles.iconStyle.color} icon={props.icon} />}

      <Appbar.Content titleStyle={styles.titleStyle} title={props.title} />
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  appBarHeaderContinerStyle: {
    backgroundColor: '#023e7d',
  },
  titleStyle: {color: 'white'},
  iconStyle: {color: 'white'},
});
export default AppBarHeader;
