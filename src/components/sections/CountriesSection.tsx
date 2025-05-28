import { countries } from "@/data/countries";
import CountryCard from "./CountryCard";

const CountriesSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Популярные кухни мира
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Каждая страна имеет свои уникальные традиции и секреты приготовления
            блюд
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {countries.map((country, index) => (
            <CountryCard key={index} country={country} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountriesSection;
