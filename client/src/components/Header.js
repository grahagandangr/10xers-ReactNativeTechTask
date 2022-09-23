import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import tw from 'twrnc';
import {useNavigation} from '@react-navigation/native';

export default function Header() {
  const navigation = useNavigation();
  return (
    <View style={tw`flex-row justify-between px-5 py-2`}>
      <AntDesign
        onPress={() => {
          navigation.goBack();
        }}
        name="arrowleft"
        size={20}
        color="white"
      />
      <Icon name="user" solid size={20} color="#fff" />
    </View>
  );
}
