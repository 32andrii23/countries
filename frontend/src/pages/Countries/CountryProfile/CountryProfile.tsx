import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { RouterKey } from '@/constants';
import { useCountryInfo } from '@/hooks/useCountryInfo';
import { ArrowLeft, Loader2 } from 'lucide-react';
import { Suspense } from 'react';
import { Link, useParams } from 'react-router-dom';
import { BorderCountries } from './BorderCountries';
import { CountryPopulationChart } from './CountryPopulationChart';

export const CountryProfile = () => {
  const { countryName } = useParams();

  const {
    data: country,
    isLoading: isCountryLoading,
    error: countryError,
  } = useCountryInfo(countryName || '');

  if (isCountryLoading)
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <Loader2 className="animate-spin w-10 h-10" />
      </div>
    );

  if (!country || countryError) return <div>Unable to fetch country</div>;

  return (
    <div className="container mx-auto p-4">
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center justify-between mb-4">
            <Link to={RouterKey.COUNTRIES}>
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to List
              </Button>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <img
              src={country.flag}
              alt={`Flag of ${countryName}`}
              width={80}
              height={60}
              className="rounded-md"
            />
            <CardTitle className="text-3xl">{countryName}</CardTitle>
          </div>
        </CardHeader>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Border Countries</CardTitle>
        </CardHeader>
        <CardContent>
          <Suspense fallback={<div>Loading border countries...</div>}>
            <BorderCountries borderCountries={country.borderCountries} />
          </Suspense>
        </CardContent>
      </Card>

      <CountryPopulationChart populationData={country.populationData} />
    </div>
  );
};
