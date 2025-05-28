import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Country } from "@/types";
import { getDifficultyColor } from "@/utils/difficulty";

interface CountryCardProps {
  country: Country;
}

const CountryCard = ({ country }: CountryCardProps) => {
  return (
    <Card className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border-0 shadow-lg">
      <div className="relative">
        <img
          src={country.image}
          alt={country.dish}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 text-3xl bg-white rounded-full p-2 shadow-lg">
          {country.flag}
        </div>
      </div>

      <CardHeader className="pb-2">
        <CardTitle className="text-xl text-gray-800 group-hover:text-orange-600 transition-colors">
          {country.dish}
        </CardTitle>
        <CardDescription className="text-sm font-semibold text-orange-600">
          {country.name}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-gray-600 text-sm leading-relaxed">
          {country.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Clock" size={16} className="text-gray-500" />
            <span className="text-sm text-gray-600">{country.time}</span>
          </div>

          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(country.difficulty)}`}
          >
            {country.difficulty}
          </span>
        </div>

        <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
          <Icon name="BookOpen" size={16} />
          Смотреть рецепт
        </Button>
      </CardContent>
    </Card>
  );
};

export default CountryCard;
