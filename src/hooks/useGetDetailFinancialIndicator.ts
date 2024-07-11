import {useState, useEffect} from 'react';
import apiInstance from '../config/axiosConfig'; // suponiendo que tienes una instancia de la API
import setIndicatorNameUtil from '../utils/setIndicatorNameUtil';

interface Props {
  indicatorName: string;
}
const useGetDetailFinancialIndicator = ({indicatorName}: Props) => {
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
      } catch (error: unknown) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchIndicators();
  }, [indicatorName]);

  return {detail, loading, error};
};

export default useGetDetailFinancialIndicator;
