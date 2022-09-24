import {View, Text, Dimensions} from 'react-native';
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/FontAwesome5';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function GeneralCollectionDetailCard() {
  return (
    <View
      style={[
        tw`mx-auto bg-black -mt-10 mb-10 rounded-2xl shadow-lg shadow-white `,
        {width: windowWidth * 0.9, height: windowHeight * 0.1},
      ]}>
      <View style={tw`my-auto mx-10 flex flex-row justify-between`}>
        <View style={tw`justify-center items-center`}>
          <Text style={tw`text-slate-200 uppercase font-bold`}>Items</Text>
          <Text style={tw`text-slate-200 font-extrabold`}>2</Text>
        </View>
        <View style={tw`justify-center items-center`}>
          <Text style={tw`text-slate-200 uppercase font-bold`}>
            Total Volume
          </Text>
          <Text style={tw`text-slate-200 font-extrabold`}>
            <Icon name="ethereum" size={15} color="#fff" /> 13.1
          </Text>
        </View>
        <View style={tw`justify-center items-center`}>
          <Text style={tw`text-slate-200 uppercase font-bold`}>1 Day</Text>
          <Text style={[tw`text-slate-200 font-extrabold`, {color: '#22c55e'}]}>
            <Icon name="caret-up" size={15} color="#22c55e" /> 13.1%
          </Text>
        </View>
      </View>
    </View>
  );
}
