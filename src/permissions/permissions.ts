import {request, PERMISSIONS, check} from 'react-native-permissions';

const requestPermissions = () => {
  check(PERMISSIONS.IOS.BLUETOOTH).then(result => {});
};

export default requestPermissions;
