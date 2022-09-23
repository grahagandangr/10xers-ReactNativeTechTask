import {View, Text} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Header() {
  return (
    <View>
      <Text>Header</Text>
      <Icon name="home" size={30} color="#900" />
    </View>
  );
}
