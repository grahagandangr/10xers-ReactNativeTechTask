import {StyleSheet, View, Dimensions, Text, ToastAndroid} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import tw from 'twrnc';

export default function Chart({date, floorPrice, filter, indexMaxFloorPrice}) {
  return (
    <View style={tw`mx-auto mb-5`}>
      <LineChart
        data={{
          labels: date,
          datasets: [
            {
              data: floorPrice,
            },
          ],
        }}
        width={Dimensions.get('window').width - 50} // from react-native
        height={200}
        withInnerLines={false}
        withOuterLines={false}
        withVerticalLabels={filter == 30 ? false : true}
        // withHorizontalLabels={false}
        // withVerticalLabels={false}
        onDataPointClick={({value}) => {
          ToastAndroid.show(`Floor Price ETH: ${value}`, ToastAndroid.SHORT);
        }}
        renderDotContent={({x, y, index}) => {
          if (index == indexMaxFloorPrice) {
            return (
              <Text
                key={index}
                style={{
                  color: 'white',
                  position: 'absolute',
                  top: y - 17,
                  left: x - 10,
                  fontSize: 12,
                }}>
                {date[index]}
              </Text>
            );
          }
        }}
        chartConfig={{
          backgroundGradientFrom: '#161616',
          backgroundGradientTo: '#0d0d0d',
          backgroundGradientToOpacity: 0.7,
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `#2563eb`,
          labelColor: (opacity = 1) => `#2563eb`,
          style: {
            borderRadius: 16,
          },
        }}
        bezier
        style={{
          borderRadius: 16,
        }}
      />
    </View>
  );
}