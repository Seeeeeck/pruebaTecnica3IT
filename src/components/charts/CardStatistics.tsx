import React from 'react';
import {Card, Text} from 'react-native-paper';
import {LineChart} from 'react-native-chart-kit';
import {Dimensions, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

interface CardStatisticsProps {
  data: Array<any>;
  labels: Array<any>;
}
const CardStatistics: React.FC<CardStatisticsProps> = ({data, labels}) => {
 
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <LineChart
        data={{
          labels: data,
          datasets: [
            {
              data: [...labels],
            },
          ],
        }}
        width={900} // from react-native
        height={Dimensions.get("screen").height * 0.5}
        yAxisLabel="$"
        yAxisSuffix=""
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: '#0000FF', // azul sólido de fondo
          backgroundGradientFrom: '#1E90FF', // degradado desde azul claro
          backgroundGradientTo: '#87CEFA', // degradado hasta azul cielo
          decimalPlaces: 2, // opcional, por defecto a 2dp
          color: (opacity = 4) => `rgba(0, 0, 139, ${opacity})`, // azul oscuro para los elementos del gráfico
          labelColor: (opacity = 1) => `white`, // azul oscuro para las etiquetas
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#1E90FF', // azul claro para los puntos
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          margin: 4,
          borderRadius: 16,
        }}
      />
    </ScrollView>
  );
};

export default CardStatistics;
