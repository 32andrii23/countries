import { Card, CardContent } from "@/components/ui/Card";
import { RouterKey } from "@/constants";
import { useAvailableCountries } from "@/hooks/useAvailableCountries";
import { Loader2 } from "lucide-react";
import { Link } from "react-router-dom";

export const CountriesList = () => {
  const {
    data: countries,
    isLoading: isCountriesLoading,
    error: countriesError,
  } = useAvailableCountries();

  if (isCountriesLoading) return <Loader2 className="animate-spin mx-auto" />;

  if (!countries || countriesError)
    return <div className="mx-auto">Unable to fetch countries</div>;

  return (
    <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {countries.map((country) => (
        <Link
          key={country.countryCode}
          to={RouterKey.COUNTRY_PROFILE.replace(":countryName", country.name)}
          className="block hover:no-underline"
        >
          <Card className="transition-all duration-300 hover:shadow-lg hover:scale-105">
            <CardContent className="p-4">
              <h2 className="text-lg font-semibold mb-2 text-primary">
                {country.name}
              </h2>
              <p className="text-sm text-muted-foreground">
                {country.countryCode}
              </p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};
