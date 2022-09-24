import {StyleSheet, View, Dimensions, Text ,ToastAndroid} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import tw from 'twrnc';

export default function Chart() {
  return (
    <View style={tw`px-5`}>
      <LineChart
        data={{
          labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni'],
          datasets: [
            {
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={Dimensions.get('window').width - 50} // from react-native
        height={200}
        yAxisLabel={'Rp'}
        withInnerLines={false}
        withOuterLines={false}
        withVerticalLabels={false}
        onDataPointClick={({value, dataset, getColor}) => {
          console.log(value);
          console.log(dataset);
          console.log(getColor(0.2));
          ToastAndroid.show(String(value), ToastAndroid.SHORT);
        }}
        renderDotContent={({x, y, index}) => {
          if (index == 19) {
            return (
              <Text key={index}
                style={{
                  color: 'white',
                  position: 'absolute',
                  top: y - 20,
                  left: x - 10,
                  fontSize: 12,
                }}>
                {index + 1 + ' Januari'}
              </Text>
            );
          }
        }}
        // withHorizontalLabels={false}
        chartConfig={{
          backgroundColor: '#000',
          // backgroundGradientFrom: '#fb8c00',
          // backgroundGradientTo: '#ffa726',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `#2563eb`,
          labelColor: (opacity = 1) => `#e2e8f0`,
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

const styles = StyleSheet.create({
  sectionContainer: {
    paddingHorizontal: 24,
  },
});
