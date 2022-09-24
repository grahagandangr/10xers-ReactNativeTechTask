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
  ActivityIndicator,
} from 'react-native';
import {useCallback, useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import axios from 'axios';
import {useFocusEffect} from '@react-navigation/native';
import tw from 'twrnc';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/FontAwesome5';
import HomeCard from '../components/CollectionItemCard';

const windowWidth = Dimensions.get('window').width;

export default function Home({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [walletContent, setWalletContent] = useState([]);
  const [loading, setLoading] = useState(true);

  const getWalletContent = async () => {
    try {
      let url = 'https://api-generator.retool.com/jlEsLB/wallet_content';
      let {data} = await axios.get(url);
      console.log(data, '>>>>>>>>>>>>>>>');
      let collection = JSON.parse(data[0].collection_json)
      console.log(collection.id, 'jsdjkajdka');
      // let jparse = JSON.parse(data)
      // console.log(jparse[0].collection_json.id);
      setWalletContent(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getWalletContent();
    }, []),
  );

  if (loading) {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: 'black',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size="large" color="#e2e8f0" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={tw`px-4 py-5`}>
        <Text style={tw`text-slate-200 text-5xl pb-2 font-bold tracking-wider`}>
          Ready to
        </Text>
        <Text style={tw`text-slate-200 text-5xl pb-2 font-bold tracking-wider`}>
          get started?
        </Text>
        <Text style={tw`text-slate-200 text-xl tracking-widest italic`}>
          Get unique NFT collection here!
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
