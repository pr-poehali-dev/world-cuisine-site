const StatsSection = () => {
  const stats = [
    { value: "50+", label: "Стран мира", color: "text-orange-600" },
    { value: "200+", label: "Национальных блюд", color: "text-blue-600" },
    { value: "1000+", label: "Рецептов", color: "text-purple-600" },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className={`text-4xl font-bold ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
