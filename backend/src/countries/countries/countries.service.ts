import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class CountriesService {
  constructor(private readonly httpService: HttpService) {}

  public async getAvailableCountries() {
    const response = await firstValueFrom(
      this.httpService.get(process.env.AVAILABLE_COUNTRIES_API_URL || ''),
    );
    return response.data;
  }

  public async getCountryCodeByName(countryName: string): Promise<string> {
    const response = await firstValueFrom(
      this.httpService.post(
        process.env.GET_CODE_BY_COUNTRY_NAME_API_URL || '',
        {
          country: countryName,
        },
      ),
    );

    return response.data.data.Iso2;
  }

  public async getCountryInfo(countryName: string) {
    const countryCode = await this.getCountryCodeByName(countryName);

    const bordersUrl = `${process.env.GET_COUNTRY_BORDERS_API_URL}/${countryCode}`;
    const bordersResponse = await firstValueFrom(
      this.httpService.get(bordersUrl),
    );
    const borderCountries = bordersResponse.data.borders;

    const populationResponse = await firstValueFrom(
      this.httpService.post(
        process.env.GET_COUNTRY_POPULATION_STATS_API_URL || '',
        {
          country: countryName,
        },
      ),
    );
    const populationData = populationResponse.data.data.populationCounts;

    const flagResponse = await firstValueFrom(
      this.httpService.post(process.env.GET_COUNTRY_FLAG_API_URL || '', {
        country: countryName,
      }),
    );
    const flag = flagResponse.data.data.flag;

    return {
      borderCountries,
      populationData,
      flag,
    };
  }
}
