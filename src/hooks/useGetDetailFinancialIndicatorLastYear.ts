import {useState, useEffect} from 'react';
import apiInstance from '../config/axiosConfig'; // suponiendo que tienes una instancia de la API
import setIndicatorNameUtil from '../utils/setIndicatorNameUtil';

interface useGetDetailsFinancialIndicatorLastYearProps {
  indicatorName: string;
}
const useGetDetailsFinancialIndicatorLastYear = ({indicatorName}: useGetDetailsFinancialIndicatorLastYearProps) => {
  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  let today = new Date();
  let oneYearAgo = new Date();
  oneYearAgo.setFullYear(today.getFullYear() - 1);
  const yearAgo = oneYearAgo.getFullYear();
  const monthAgo = oneYearAgo.getMonth();

  useEffect(() => {
    const fetchIndicators = async () => {
      setLoading(true);
      try {
        const response = await apiInstance.get(
          `${indicatorName}/posteriores/${yearAgo}/${monthAgo}`,
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

export default useGetDetailsFinancialIndicatorLastYear;
