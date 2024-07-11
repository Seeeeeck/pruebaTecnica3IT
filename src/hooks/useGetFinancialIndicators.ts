import {useState, useEffect} from 'react';
import apiInstance from '../config/axiosConfig'; // suponiendo que tienes una instancia de la API
import setIndicatorNameUtil from '../utils/setIndicatorNameUtil';
import Toast from 'react-native-toast-message';

interface useFinancialIndicatorsProps {
  indicatorName: string;
  month: number;
  year: number;
  month2: number;
  year2: number;
}
const useFinancialIndicators = ({
  indicatorName,
  month,
  year,
  month2,
  year2,
}: useFinancialIndicatorsProps) => {
  const [indicators, setIndicators] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchIndicators = async () => {
      setLoading(true);
      try {
        const response = await apiInstance.get(
          indicatorName === 'dolar' ||
            indicatorName === 'euro' ||
            indicatorName === 'uf'
            ? `${indicatorName}/periodo/${year2}/${month2}/${year}/${month}`
            : `${indicatorName}/${year}`,
          {
            params: {
              formato: 'json',
            },
          },
        );

        const indicatorResponse = setIndicatorNameUtil(indicatorName, response);
        setIndicators(indicatorResponse);
        Toast.show({
          type: 'success',
          text1: 'Datos obtenidos',
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
  }, [indicatorName, month, year]);

  return {indicators, loading, error};
};

export default useFinancialIndicators;
