import {useState, useEffect} from 'react';
import apiInstance from '../config/axiosConfig'; // suponiendo que tienes una instancia de la API
import setIndicatorNameUtil from '../utils/setIndicatorNameUtil';

interface Props {
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
}: Props) => {
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
      } catch (error: unknown) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchIndicators();
  }, [indicatorName, month, year]);

  return {indicators, loading, error};
};

export default useFinancialIndicators;
