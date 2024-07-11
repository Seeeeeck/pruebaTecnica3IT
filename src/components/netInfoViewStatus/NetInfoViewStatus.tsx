import {StyleSheet, View} from 'react-native';
import {useNetInfo} from '@react-native-community/netinfo';
import {Text} from 'react-native-paper';
import Toast from 'react-native-toast-message';
interface Props {
  children: React.ReactNode;
}

const NetInfoViewStatus: React.FC<Props> = ({children}) => {
  const {type, isConnected} = useNetInfo();
  return (
    <View>
      {isConnected ? (
        <View style={style.statusStyleConnected}>
          <Text style={style.statusStyleText}>Conectado</Text>
        </View>
      ) : (
        <View style={style.statusStyleDisconnected}>
          <Text style={style.statusStyleText}>Desconectado</Text>
        </View>
      )}
    
      {children}
    </View>
  );
};

const style = StyleSheet.create({
  statusStyleConnected: {
    backgroundColor: '#38b000',
  },
  statusStyleDisconnected: {
    backgroundColor: 'red',
  },
  statusStyleText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default NetInfoViewStatus;
