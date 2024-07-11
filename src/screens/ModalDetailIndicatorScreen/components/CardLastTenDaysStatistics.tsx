import CardStatistics from '../../../components/charts/CardStatistics';
import useGetDetailsFinancialIndicatorLastTenDays from '../../../hooks/useGetDetailsFinancialIndicatorLastTenDays';


interface CardLastTenDaysStatisticsProps {
  name: string;
}
const CardLastTenDaysStatistics: React.FC<CardLastTenDaysStatisticsProps> = ({
  name,
}) => {
  const {detail, loading, error} = useGetDetailsFinancialIndicatorLastTenDays({
    indicatorName: name,
  });

  let days = detail?.map(item => item.Fecha);
  let indicators = detail?.map(item => parseFloat(item.Valor));

  if (days?.length > 0 && indicators?.length > 0) {
    return (
      <CardStatistics
        data={days ? days : []}
        labels={indicators ? indicators : []}
      />
    );
  } else {
    return null;
  }
};

export default CardLastTenDaysStatistics;
