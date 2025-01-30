import { Controller, Get, Param } from '@nestjs/common';
import { CountriesService } from './countries.service';

@Controller('countries')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

  @Get('available')
  public async getAvailableCountries() {
    return this.countriesService.getAvailableCountries();
  }

  @Get(':countryName')
  public async getCountryInfo(@Param('countryName') countryName: string) {
    return this.countriesService.getCountryInfo(countryName);
  }
}
