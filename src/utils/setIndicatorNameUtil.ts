const setIndicatorNameUtil = (indicatorName: string, response: any) => {
  if (indicatorName === 'dolar') {
    return response?.data?.Dolares;
  }

  if (indicatorName === 'euro') {
    return response?.data?.Euros;
  }

  if (indicatorName === 'uf') {
    return response?.data?.UFs;
  }

  if (indicatorName === 'utm') {
    return response?.data?.UTMs;
  }

  if (indicatorName === 'ipc') {
    return response?.data?.IPCs;
  }
};

export default setIndicatorNameUtil;
