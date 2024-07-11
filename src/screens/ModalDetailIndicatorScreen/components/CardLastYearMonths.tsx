import CardStatistics from '../../../components/charts/CardStatistics';
import useGetDetailsFinancialIndicatorLastYear from '../../../hooks/useGetDetailFinancialIndicatorLastYear';
import useGetDetailsFinancialIndicatorLastTenDays from '../../../hooks/useGetDetailsFinancialIndicatorLastTenDays';

interface CardLastYearMonthsProps {
  name: string;
}
const CardLastYearMonths: React.FC<CardLastYearMonthsProps> = ({name}) => {
  const {detail, error, loading} = useGetDetailsFinancialIndicatorLastYear({
    indicatorName: name,
  });
  const days = detail?.map(item=> item?.Fecha);
  const indicators = detail?.map(item => parseFloat(item?.Valor));

  if (days.length > 0 && indicators.length > 0) {
    return <CardStatistics data={days} labels={indicators} />;
  } else {
    return null;
  }
};

export default CardLastYearMonths;
