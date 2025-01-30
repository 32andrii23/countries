import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import { BorderCountryDto } from "@/types";
import { Pointer } from "lucide-react";
import { Link } from "react-router-dom";

interface BorderCountriesProps {
  borderCountries: BorderCountryDto[];
}

export const BorderCountries: React.FC<BorderCountriesProps> = ({
  borderCountries,
}) => {
  return (
    <div className="flex flex-wrap gap-2">
      {borderCountries.map((country, index) => (
        <Link
          className="relative group"
          key={country.countryCode}
          to={`/${country.commonName}`}
        >
          <Badge
            variant="secondary"
            className="cursor-pointer hover:bg-secondary-foreground hover:text-secondary transition-colors"
          >
            {country.commonName}
          </Badge>
          <Pointer
            className={cn(
              "w-4 h-4 opacity-100 group-hover:opacity-0 transition",
              index === 0 ? "absolute -bottom-2 -left-2 rotate-45" : "hidden"
            )}
          />
        </Link>
      ))}
      {borderCountries.length === 0 && (
        <p className="text-muted-foreground text-sm italic">
          No border countries for this country...
        </p>
      )}
    </div>
  );
};
