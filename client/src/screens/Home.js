import {
  View,
  Text,
  Modal,
  Pressable,
  StyleSheet,
  ToastAndroid,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {useCallback, useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import axios from 'axios';
import {useFocusEffect} from '@react-navigation/native';
import tw from 'twrnc';
import Header from '../components/Header';

export default function Home() {
  const windowWidth = Dimensions.get('window').width;
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
});
