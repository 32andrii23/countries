import { Countries } from '@/pages/Countries/Countries';
import { CountryProfile } from '@/pages/Countries/CountryProfile/CountryProfile';

export enum RouterKey {
  COUNTRIES = '/',
  COUNTRY_PROFILE = '/:countryName',
}

export const routerKeyToComponentMap = {
  [RouterKey.COUNTRIES]: <Countries />,
  [RouterKey.COUNTRY_PROFILE]: <CountryProfile />,
};
export enum BackendRoute {
  AVAILABLE_COUNTRIES = '/countries/available',
  COUNTRY_INFO = '/countries',
}

export enum QueryKey {
  AVAILABLE_COUNTRIES = 'AVAILABLE_COUNTRIES',
  COUNTRY_INFO = 'COUNTRY_INFO',
}
