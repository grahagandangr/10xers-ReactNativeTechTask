import {View, Text, Dimensions} from 'react-native';
import tw from 'twrnc';
import Icon from 'react-native-vector-icons/FontAwesome5';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function GeneralCollectionDetailCard({data}) {
  return (
    <View
      style={[
        tw`mx-auto bg-black mb-3 rounded-2xl shadow-lg shadow-white `,
        {
          width: windowWidth * 0.9,
          height: windowHeight * 0.1,
          marginTop: (-windowHeight * 0.1) / 2,
        },
      ]}>
      <View style={tw`my-auto mx-10 flex flex-row justify-between`}>
        <View style={tw`justify-center items-center`}>
          <Text style={tw`text-slate-200 uppercase font-bold`}>Items</Text>
          <Text style={tw`text-slate-200 font-extrabold`}>
            {data.owned_tokens.length}
          </Text>
        </View>
        <View style={tw`justify-center items-center`}>
          <Text style={tw`text-slate-200 uppercase font-bold`}>
            Total Volume
          </Text>
          <Text style={tw`text-slate-200 font-extrabold`}>
            <Icon name="ethereum" size={15} color="#fff" />{' '}
            {JSON.parse(data.total_volume).toFixed(2)}
          </Text>
        </View>
        <View style={tw`justify-center items-center`}>
          <Text style={tw`text-slate-200 uppercase font-bold`}>1 Day</Text>
          {data.one_day_change.includes('-') ? (
            <Text
              style={[tw`text-slate-200 font-extrabold`, {color: '#dc2626'}]}>
              <Icon name="caret-down" size={15} color="#dc2626" />{' '}
              {JSON.parse(data.one_day_change).toFixed(2)}%
            </Text>
          ) : (
            <Text
              style={[tw`text-slate-200 font-extrabold`, {color: '#22c55e'}]}>
              <Icon name="caret-up" size={15} color="#22c55e" />{' '}
              {JSON.parse(data.one_day_change).toFixed(2)}%
            </Text>
          )}
        </View>
      </View>
    </View>
  );
}
