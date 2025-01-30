import { BackendRoute } from '@/constants';
import { AvailableCountryDto, CountryInfoDto } from '@/types';
import axios from 'axios';

const API_URL = import.meta.env.API_URL || 'http://localhost:3000';

const apiService = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getAvailableCountries = async () => {
  try {
    const response = await apiService.get<AvailableCountryDto[]>(
      BackendRoute.AVAILABLE_COUNTRIES,
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching available countries:', error);
    throw error;
  }
};

export const getCountryInfo = async (countryName: string) => {
  try {
    const response = await apiService.get<CountryInfoDto>(
      `${BackendRoute.COUNTRY_INFO}/${countryName}`,
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching country info:', error);
    throw error;
  }
};
