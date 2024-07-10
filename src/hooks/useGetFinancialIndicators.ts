import {useState, useEffect} from 'react';
import apiInstance from '../config/axiosConfig'; // suponiendo que tienes una instancia de la API

interface Props {
  indicatorName: string;
  month: number;
  year: number;
}
const useFinancialIndicators = ({indicatorName, month, year}: Props) => {
  const [indicators, setIndicators] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchIndicators = async () => {
      setLoading(true);
      try {
        const response = await apiInstance.get(
          `${indicatorName}/${year}/${month}`,
          {
            params: {
              formato: 'json',
            },
          },
        );
        const items = [
          {id: 1, label: 'Dólar', name: 'dolar', icon: 'currency-usd'},
          {id: 2, label: 'Euro', name: 'euro', icon: 'currency-eur'},
          {id: 3, label: 'IPC', name: 'ipc', icon: 'finance'},
          {id: 4, label: 'UF', name: 'uf', icon: 'hand-coin-outline'},
          {
            id: 5,
            label: 'UTM',
            name: 'utm',
            icon: 'credit-card-search-outline',
          },
        ];
        if (indicatorName === 'dolar') {
          setIndicators(response?.data?.Dolares);
        }

        if (indicatorName === 'euro') {
          setIndicators(response?.data?.Euros);
        }

        if (indicatorName === 'uf') {
          setIndicators(response?.data?.UFs);
        }

        if (indicatorName === 'utm') {
          setIndicators(response?.data?.UTMs);
        }

        if (indicatorName === 'ipc') {
          setIndicators(response?.data?.IPCs);
        }
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
