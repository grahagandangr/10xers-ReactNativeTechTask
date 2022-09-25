import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Dimensions,
  Image,
  ActivityIndicator,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CollectionTokenCard from '../components/CollectionTokenCard';
import Header from '../components/Header';
import tw from 'twrnc';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome5';
import GeneralCollectionDetailCard from '../components/GeneralCollectionDetailCard';
import Chart from '../components/Chart';
import {useRoute} from '@react-navigation/native';
import {useCallback, useEffect, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Detail() {
  const route = useRoute();
  const {id} = route.params;
  const [modifiedData, setModifiedData] = useState([]);
  const [date, setDate] = useState([]);
  const [floorPrice, setFloorPrice] = useState([]);
  const [filter, setFilter] = useState(7);
  const [loading, setLoading] = useState(true);
  const [loadingStats, setLoadingStats] = useState(true);
  const [indexMaxFloorPrice, setIndexMaxFloorPrice] = useState(0);

  const getCollectionById = async () => {
    try {
      let urlWallet = 'https://api-generator.retool.com/jlEsLB/wallet_content';
      let urlCollection = `https://api-generator.retool.com/j3Iz08/collections/${id}`;
      let {data: wallets} = await axios.get(urlWallet);
      let {data: collection} = await axios.get(urlCollection);
      collection.owned_tokens = [];
      wallets.forEach(el => {
        el.collection_json = JSON.parse(el.collection_json);
      });

      wallets.forEach(wallet => {
        if (collection.external_id === wallet.collection_json.external_id) {
          collection.owned_tokens.push(wallet);
        }
      });

      setModifiedData(collection);
      setLoading(false);
    } catch (error) {
      console.log(error);
      ToastAndroid.show('Something error happened', ToastAndroid.SHORT);
    }
  };

  const getStats = async () => {
    try {
      let url = `https://api-generator.retool.com/ELI42D/collection_stats?collection_id=${id}`;
      let {data} = await axios.get(url);
      let dateForChart = data.map(el =>
        el.timestamp.split('/').slice(0, 2).join('/'),
      );
      let filteredDate = dateForChart.slice(0, filter);
      let floorPriceForChart = data.map(el => +el.floor_price_eth);
      setDate(filteredDate);
      let filteredFloorPrice = floorPriceForChart.slice(0, filter);
      let maxFloorPrice = Math.max(...filteredFloorPrice);
      let maxFloorPriceIndex = 0;
      filteredFloorPrice.forEach((el, idx) => {
        if (el === maxFloorPrice) {
          maxFloorPriceIndex = idx;
        }
      });

      setIndexMaxFloorPrice(maxFloorPriceIndex);
      setFloorPrice(filteredFloorPrice);
      setLoadingStats(false);
    } catch (error) {
      console.log(error);
      ToastAndroid.show('Something error happened', ToastAndroid.SHORT);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getCollectionById();
      getStats();
    }, [filter]),
  );

  if (loading || loadingStats) {
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
      <ImageBackground
        blurRadius={5}
        style={{
          width: windowWidth,
          height: windowHeight * 0.3,
        }}
        source={{
          uri: modifiedData.banner_image_url,
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
              uri: modifiedData.image_url,
            }}
          />
          <Text
            style={tw`text-center text-slate-200 italic font-bold bg-black rounded-full bg-opacity-70 mt-2`}>
            {modifiedData.name}
          </Text>
        </View>
      </ImageBackground>
      <GeneralCollectionDetailCard data={modifiedData} />
      <View
        style={[
          tw`mx-auto bg-black mb-3 rounded-lg shadow-lg shadow-white py-1 px-1`,
          {
            // height: windowHeight * 0.04,
          },
        ]}>
        <View style={tw`my-auto flex flex-row justify-between`}>
          {filter === 3 ? (
            <View
              style={tw`bg-white h-6 bg-opacity-80 text-red-500 px-1 mx-0.25 rounded-lg w-10 text-center justify-center items-center`}>
              <Text style={tw`text-xs text-red-500 font-bold`}>3d</Text>
            </View>
          ) : (
            <TouchableOpacity
              onPress={() => {
                setFilter(3);
              }}>
              <View
                style={tw`bg-white h-6 bg-opacity-60 text-red-500 px-1 mx-0.25 rounded-lg w-10 text-center justify-center items-center`}>
                <Text style={tw`text-xs text-black font-bold`}>3d</Text>
              </View>
            </TouchableOpacity>
          )}

          {filter === 7 ? (
            <View
              style={tw`bg-white h-6 bg-opacity-80 text-red-500 px-1 mx-0.25 rounded-lg w-10 text-center justify-center items-center`}>
              <Text style={tw`text-xs text-red-500 font-bold`}>7d</Text>
            </View>
          ) : (
            <TouchableOpacity
              onPress={() => {
                setFilter(7);
              }}>
              <View
                style={tw`bg-white h-6 bg-opacity-60 text-red-500 px-1 mx-0.25 rounded-lg w-10 text-center justify-center items-center`}>
                <Text style={tw`text-xs text-black font-bold`}>7d</Text>
              </View>
            </TouchableOpacity>
          )}
          {filter === 30 ? (
            <View
              style={tw`bg-white h-6 bg-opacity-80 text-red-500 px-1 mx-0.25 rounded-lg w-10 text-center justify-center items-center`}>
              <Text style={tw`text-xs text-red-500 font-bold`}>30d</Text>
            </View>
          ) : (
            <TouchableOpacity
              onPress={() => {
                setFilter(30);
              }}>
              <View
                style={tw`bg-white h-6 bg-opacity-60 text-red-500 px-1 mx-0.25 rounded-lg w-10 text-center justify-center items-center`}>
                <Text style={tw`text-xs text-black font-bold`}>30d</Text>
              </View>
            </TouchableOpacity>
          )}
        </View>
      </View>
      <Chart
        date={date}
        floorPrice={floorPrice}
        filter={filter}
        indexMaxFloorPrice={indexMaxFloorPrice}
      />
      <View
        style={tw`mx-auto bg-white h-0.2 w-[90%] bg-opacity-50 mb-5`}></View>
      {modifiedData.owned_tokens.length == 0 ? (
        <Text style={tw`text-slate-200 text-xl tracking-widest italic`}>
          There is no owned token yet
        </Text>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false} style={tw`mx-auto`}>
          <View style={tw`flex flex-row flex-wrap`}>
            {modifiedData.owned_tokens.map(token => (
              <CollectionTokenCard key={token.id} token={token} />
            ))}
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
