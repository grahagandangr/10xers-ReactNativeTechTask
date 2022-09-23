import {
  View,
  Text,
  Modal,
  Pressable,
  StyleSheet,
  ToastAndroid,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Image,
  ImageBackground,
} from 'react-native';
import {useCallback, useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import axios from 'axios';
import {useFocusEffect} from '@react-navigation/native';
import tw from 'twrnc';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/FontAwesome5';
import HomeCard from '../components/HomeCard';

const windowWidth = Dimensions.get('window').width;

export default function Home({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState([]);

  const getWalletContent = async () => {
    try {
      let url = 'https://api-generator.retool.com/jlEsLB/wallet_content';
      let {data} = await axios.get(url);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getWalletContent();
      console.log(data, '<<<<<<<<<<<<<<<<<<<');
    }, []),
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={tw`px-4 py-5`}>
        <Text
          onPress={() => {
            navigation.navigate('Detail');
          }}
          style={tw`text-white text-5xl pb-2 font-bold`}>
          Ready to
        </Text>
        <Text style={tw`text-white text-5xl pb-2 font-bold`}>get started?</Text>
        <Text style={tw`text-white text-xl font-bold`}>
          Get unique NFT collection
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={tw`mx-auto`}>
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  movieCard: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 30,
  },
  poster: {
    backgroundColor: 'white',
    width: windowWidth * 0.8,
    height: windowWidth * 0.7,
    borderRadius: 30,
    flex: 1,
  },
});
