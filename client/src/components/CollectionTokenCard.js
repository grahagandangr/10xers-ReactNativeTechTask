import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import tw from 'twrnc';

const windowWidth = Dimensions.get('window').width;

export default function CollectionTokenCard({token}) {
  return (
    <View
      style={[
        {
          width: windowWidth * 0.47,
          height: windowWidth * 0.47,
          justifyContent: 'center',
          alignItems: 'center',
        },
        tw`flex mb-5 shadow-lg p-1 mx-1 shadow-white rounded-2xl`,
      ]}>
      <ImageBackground
        imageStyle={[{borderRadius: 17}, tw`shadow-lg`]}
        style={[styles.poster]}
        source={{
          uri: token.image_url,
        }}>
        <View style={tw`flex flex-row justify-end`}>
          <View style={{marginTop: windowWidth * 0.375}}>
            <View
              style={tw`bg-slate-200 bg-opacity-80 rounded-full shadow-lg mx-2 px-2 py-1 flex-row`}>
              <Icon name="gem" solid size={18} color="#000" />
              <Text style={tw`text-black font-extrabold my-auto px-1`}>
                #{token.token_id}
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  poster: {
    backgroundColor: 'white',
    width: windowWidth * 0.47,
    height: windowWidth * 0.47,
    borderRadius: 20,
    shadowColor: '#fff',
    flex: 1,
  },
});
