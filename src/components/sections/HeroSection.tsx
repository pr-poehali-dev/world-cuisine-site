import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 text-white py-20 px-4">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Кухня Стран Мира 🌍
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
          Откройте для себя вкусы планеты! Путешествуйте по странам через их
          национальные блюда и традиции
        </p>
        <Button
          size="lg"
          className="bg-white text-orange-600 hover:bg-orange-50 text-lg px-8 py-4 h-auto"
        >
          <Icon name="ChefHat" size={24} />
          Начать кулинарное путешествие
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
