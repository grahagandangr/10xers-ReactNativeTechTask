import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import tw from 'twrnc';

const windowWidth = Dimensions.get('window').width;

export default function CollectionItemCard() {
  const navigation = useNavigation(); 
  return (
    <TouchableOpacity onPress={() => {
      navigation.navigate('Detail');
    }} underlayColor="white" activeOpacity={0.9}>
      <View
        style={[
          {
            width: windowWidth * 0.81,
            height: windowWidth * 0.7,
            justifyContent: 'center',
            alignItems: 'center',
          },
          tw`flex mb-5 shadow-lg p-1 shadow-white rounded-3xl`,
        ]}>
        <ImageBackground
          imageStyle={[{borderRadius: 28}, tw`shadow-lg`]}
          style={[styles.poster]}
          source={{
            uri: 'https://lh3.googleusercontent.com/H-eyNE1MwL5ohL-tCfn_Xa1Sl9M9B4612tLYeUlQubzt4ewhr4huJIR5OLuyO3Z5PpJFSwdm7rq-TikAh7f5eUw338A2cy6HRH75=s120',
          }}>
          <View style={tw`flex flex-row justify-between`}>
            <View style={{marginTop: windowWidth * 0.6}}>
              <View
                style={tw`bg-slate-200 bg-opacity-80 rounded-full mx-5 shadow-lg shadow-white`}>
                <Text style={tw`text-black px-2 font-extrabold italic`}>
                  Cool Cats NFT
                </Text>
              </View>
            </View>
            <View style={{marginTop: windowWidth * 0.585}}>
              <View
                style={tw`bg-slate-200 bg-opacity-80 rounded-full shadow-lg mx-5 px-2 flex-row`}>
                <Icon name="ethereum" size={25} color="#000" />
                <Text style={tw`text-black font-extrabold my-auto px-1`}>
                  2
                </Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  poster: {
    backgroundColor: 'white',
    width: windowWidth * 0.8,
    height: windowWidth * 0.7,
    borderRadius: 30,
    shadowColor: '#fff',
    flex: 1,
  },
});
