import {useState, useEffect} from 'react';
import apiInstance from '../config/axiosConfig'; // suponiendo que tienes una instancia de la API
import setIndicatorNameUtil from '../utils/setIndicatorNameUtil';

interface Props {
  indicatorName: string;
}
const useGetDetailsFinancialIndicatorLastYear = ({indicatorName}: Props) => {
  const [detail, setDetail] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const date = new Date();

  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth();
  const currentDay = date.getDate();
  const dateYearAgo = new Date();

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
