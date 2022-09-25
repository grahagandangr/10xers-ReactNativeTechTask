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
import CollectionItemCard from '../components/CollectionItemCard';

const windowWidth = Dimensions.get('window').width;

export default function Home({navigation}) {
  const [modifiedData, setModifiedData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getWalletContent = async () => {
    try {
      let urlWallet = 'https://api-generator.retool.com/jlEsLB/wallet_content';
      let urlCollection = 'https://api-generator.retool.com/j3Iz08/collections';
      let {data: wallets} = await axios.get(urlWallet);
      let {data: collections} = await axios.get(urlCollection);
      wallets.forEach(el => {
        el.collection_json = JSON.parse(el.collection_json);
      });

      collections.forEach(el => {
        el.owned_tokens = [];
      });

      collections.forEach(collection => {
        wallets.forEach(wallet => {
          if (collection.external_id === wallet.collection_json.external_id) {
            collection.owned_tokens.push(wallet);
          }
        });
      });
      setModifiedData(collections);
      setLoading(false);
    } catch (error) {
      console.log(error);
      ToastAndroid.show('Something error happened', ToastAndroid.SHORT);
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
      {modifiedData.length == 0 ? (
        <Text style={tw`text-slate-200 text-xl tracking-widest italic`}>
          There is no collection
        </Text>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false} style={tw`mx-auto`}>
          {modifiedData.map(el => (
            <CollectionItemCard key={el.id} data={el} />
          ))}
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  }
});
