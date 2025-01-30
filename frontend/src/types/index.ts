export interface AvailableCountryDto {
  countryCode: string;
  name: string;
}

export interface BorderCountryDto {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
}

export interface PopulationDataDto {
  year: number;
  value: number;
}

export interface CountryInfoDto {
  borderCountries: BorderCountryDto[];
  populationData: PopulationDataDto[];
  flag: string;
}
