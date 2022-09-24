import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import tw from 'twrnc';
import {useNavigation, useRoute} from '@react-navigation/native';

export default function Header() {
  const navigation = useNavigation();
  const route = useRoute();
  console.log(route);
  return (
    <View style={tw`flex-row justify-between px-3 py-1.25`}>
      {route.name === 'Detail' ? (
        <AntDesign
          onPress={() => {
            navigation.goBack();
          }}
          name="arrowleft"
          size={20}
          color="#e2e8f0"
          style={tw`bg-black bg-opacity-70 p-0.75 rounded-full`}
        />
      ) : (
        <Icon
          name="ethereum"
          size={20}
          color="#e2e8f0"
          style={tw`bg-black bg-opacity-70 p-0.75 rounded-full`}
        />
      )}
      {route.name === 'Detail' ? (
        <View></View>
      ) : (
        <AntDesign
          name="search1"
          solid
          size={20}
          color="#e2e8f0"
          style={tw`bg-black bg-opacity-70 p-0.75 rounded-full`}
        />
      )}
    </View>
  );
}
