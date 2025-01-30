import { useQuery } from '@tanstack/react-query';
import { getAvailableCountries } from '../services/api.service';
import { QueryKey } from '@/constants';

export const useAvailableCountries = () => {
  return useQuery({
    queryKey: [QueryKey.AVAILABLE_COUNTRIES],
    queryFn: getAvailableCountries,
  });
};
