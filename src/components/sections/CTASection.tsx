import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const CTASection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">
          Готовы стать шеф-поваром мира? 👨‍🍳
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Изучайте новые рецепты, делитесь своими кулинарными экспериментами
        </p>
        <div className="space-x-4">
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-4 h-auto"
          >
            Все рецепты
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4 h-auto"
          >
            <Icon name="Heart" size={20} />
            Избранное
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
