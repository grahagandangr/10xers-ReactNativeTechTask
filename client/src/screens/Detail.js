import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Dimensions,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CollectionTokenCard from '../components/CollectionTokenCard';
import Header from '../components/Header';
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/FontAwesome5';
import GeneralCollectionDetailCard from '../components/GeneralCollectionDetailCard';
import Chart from '../components/Chart';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Detail() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        blurRadius={5}
        style={{
          width: windowWidth,
          height: windowHeight * 0.3,
        }}
        source={{
          uri: 'https://lh3.googleusercontent.com/ouzjfA0LotbHC92vuDph9JDeg7Z4ZFo12Pr9GJpfSAZSrnXDOubJn0eTvinwzUTPsWhnLLq5ocjcDSrpNV0_MYIjueVJrzFlE6p0=s2500',
        }}>
        <Header />
        <View style={tw`mx-auto my-2.5`}>
          <Image
            style={[
              {
                width: 100,
                height: 100,
                borderRadius: 15,
                borderColor: '#e2e8f0',
                borderWidth: 2,
              },
              tw`shadow-lg shadow-white`,
            ]}
            source={{
              uri: 'https://lh3.googleusercontent.com/H-eyNE1MwL5ohL-tCfn_Xa1Sl9M9B4612tLYeUlQubzt4ewhr4huJIR5OLuyO3Z5PpJFSwdm7rq-TikAh7f5eUw338A2cy6HRH75=s120',
            }}
          />
        </View>
      </ImageBackground>
      <GeneralCollectionDetailCard />
      <Chart />
      <View
        style={tw`mx-auto bg-white h-0.2 w-[90%] bg-opacity-50 mb-5`}></View>

      <ScrollView showsVerticalScrollIndicator={false} style={tw`mx-auto`}>
        <View style={tw`flex flex-row flex-wrap`}>
          <CollectionTokenCard />
          <CollectionTokenCard />
          <CollectionTokenCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
