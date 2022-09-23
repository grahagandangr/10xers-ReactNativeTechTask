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

export default function HomeCard() {
  return (
    <View style={tw`flex mb-3`}>
      <ImageBackground
        imageStyle={{borderRadius: 20}}
        style={styles.poster}
        source={{
          uri: 'https://lh3.googleusercontent.com/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT=s120',
        }}>
        <View style={tw`flex flex-row justify-between`}>
          <View style={{marginTop: windowWidth * 0.6}}>
            <View
              style={tw`bg-white bg-opacity-70 rounded-full mx-5 shadow-lg `}>
              <Text style={tw`text-black px-2 font-bold`}>Azuki</Text>
            </View>
          </View>
          <View style={{marginTop: windowWidth * 0.585}}>
            <View
              style={tw`bg-white bg-opacity-70 rounded-full shadow-lg mx-5 px-2 flex-row`}>
              <Icon name="ethereum" size={25} color="#900" />
              <Text style={tw`text-black font-bold my-auto px-1`}>2</Text>
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
    width: windowWidth * 0.8,
    height: windowWidth * 0.7,
    borderRadius: 30,
    flex: 1,
  },
});
