import {useState, useEffect} from 'react';
import apiInstance from '../config/axiosConfig'; // suponiendo que tienes una instancia de la API
import setIndicatorNameUtil from '../utils/setIndicatorNameUtil';
import Toast from 'react-native-toast-message';

interface useGetDetailsFinancialIndicatorLastTenDaysProps {
  indicatorName: string;
}
const useGetDetailsFinancialIndicatorLastTenDays = ({indicatorName}: useGetDetailsFinancialIndicatorLastTenDaysProps) => {
  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth();
  const currentDay = date.getDate();
  const dateTenDaysAgo = new Date();
  dateTenDaysAgo.setDate(date.getDate() - 10);
  const yearAgo = dateTenDaysAgo.getFullYear();
  const monthAgo = dateTenDaysAgo.getMonth();
  const dayAgo = dateTenDaysAgo.getDate();
  useEffect(() => {
    const fetchIndicators = async () => {
      setLoading(true);
      try {
        const response = await apiInstance.get(
          `${indicatorName}/periodo/${yearAgo}/${monthAgo}/dias_i/${dayAgo}/${currentYear}/${currentMonth}/dias_f/${currentDay}`,
          {
            params: {
              formato: 'json',
            },
          },
        );
        const indicatorDetailResponse = setIndicatorNameUtil(
          indicatorName,
          response,
        );

        setDetail(indicatorDetailResponse);
        Toast.show({
          type: 'success',
          text1: 'Éxito',
          visibilityTime: 2000,
        });
      } catch (error: unknown) {
        setError((error as Error).message);
        Toast.show({
          type: 'error',
          text1: 'Error',
          visibilityTime:2000
        });
      } finally {
        setLoading(false);
      }
    };

    fetchIndicators();
  }, [indicatorName]);

  return {detail, loading, error};
};

export default useGetDetailsFinancialIndicatorLastTenDays;
