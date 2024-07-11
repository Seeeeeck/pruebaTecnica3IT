import {useState, useEffect} from 'react';
import apiInstance from '../config/axiosConfig'; // suponiendo que tienes una instancia de la API
import setIndicatorNameUtil from '../utils/setIndicatorNameUtil';
import Toast from 'react-native-toast-message';

interface useGetDetailFinancialIndicatorProps {
  indicatorName: string;
}

const useGetDetailFinancialIndicator = ({
  indicatorName,
}: useGetDetailFinancialIndicatorProps) => {
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchIndicators = async () => {
      setLoading(true);
      try {
        const response = await apiInstance.get(`${indicatorName}`, {
          params: {
            formato: 'json',
          },
        });
        const indicatorDetailResponse = setIndicatorNameUtil(
          indicatorName,
          response,
        );

        setDetail(indicatorDetailResponse[0]);
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

export default useGetDetailFinancialIndicator;
