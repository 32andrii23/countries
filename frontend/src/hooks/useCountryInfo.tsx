import { useQuery } from "@tanstack/react-query";
import { getCountryInfo } from "../services/api.service";
import { QueryKey } from "@/constants";

export const useCountryInfo = (countryName: string) => {
  return useQuery({
    queryKey: [QueryKey.COUNTRY_INFO, countryName],
    queryFn: () => getCountryInfo(countryName),
    enabled: !!countryName,
  });
};
