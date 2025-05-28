import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const countries = [
    {
      name: "Италия",
      flag: "🇮🇹",
      dish: "Паста Карбонара",
      description:
        "Классическое римское блюдо с беконом, яйцами и сыром пармезан",
      image:
        "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?w=400&h=300&fit=crop",
      difficulty: "Средний",
      time: "30 мин",
    },
    {
      name: "Япония",
      flag: "🇯🇵",
      dish: "Суши Нигири",
      description: "Традиционные суши с свежей рыбой на рисовой подушке",
      image:
        "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop",
      difficulty: "Сложный",
      time: "45 мин",
    },
    {
      name: "Франция",
      flag: "🇫🇷",
      dish: "Круассан",
      description: "Слоеная выпечка с маслом, символ французской кулинарии",
      image:
        "https://images.unsplash.com/photo-1555507036-ab794f1bee30?w=400&h=300&fit=crop",
      difficulty: "Сложный",
      time: "3 часа",
    },
    {
      name: "Индия",
      flag: "🇮🇳",
      dish: "Курица Тикка Масала",
      description: "Ароматная курица в сливочно-томатном соусе со специями",
      image:
        "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop",
      difficulty: "Средний",
      time: "1 час",
    },
    {
      name: "Мексика",
      flag: "🇲🇽",
      dish: "Такос",
      description: "Кукурузные лепешки с мясом, овощами и острым соусом",
      image:
        "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400&h=300&fit=crop",
      difficulty: "Легкий",
      time: "20 мин",
    },
    {
      name: "Таиланд",
      flag: "🇹🇭",
      dish: "Пад Тай",
      description: "Жареная рисовая лапша с креветками, тофу и арахисом",
      image:
        "https://images.unsplash.com/photo-1559314809-0f31657def5e?w=400&h=300&fit=crop",
      difficulty: "Средний",
      time: "25 мин",
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Легкий":
        return "text-green-600 bg-green-100";
      case "Средний":
        return "text-orange-600 bg-orange-100";
      case "Сложный":
        return "text-red-600 bg-red-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      {/* Hero Section */}
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

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-orange-600">50+</div>
              <div className="text-gray-600">Стран мира</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-blue-600">200+</div>
              <div className="text-gray-600">Национальных блюд</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-purple-600">1000+</div>
              <div className="text-gray-600">Рецептов</div>
            </div>
          </div>
        </div>
      </section>

      {/* Countries Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Популярные кухни мира
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Каждая страна имеет свои уникальные традиции и секреты
              приготовления блюд
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {countries.map((country, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border-0 shadow-lg"
              >
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
                      <span className="text-sm text-gray-600">
                        {country.time}
                      </span>
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
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Кухня Стран Мира</h3>
          <p className="text-gray-400 mb-6">
            Открывайте новые вкусы каждый день
          </p>
          <div className="flex justify-center space-x-6">
            <Icon
              name="Instagram"
              size={24}
              className="text-gray-400 hover:text-white cursor-pointer transition-colors"
            />
            <Icon
              name="Youtube"
              size={24}
              className="text-gray-400 hover:text-white cursor-pointer transition-colors"
            />
            <Icon
              name="Facebook"
              size={24}
              className="text-gray-400 hover:text-white cursor-pointer transition-colors"
            />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
