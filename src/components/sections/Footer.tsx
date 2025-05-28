import Icon from "@/components/ui/icon";

const Footer = () => {
  const socialLinks = [
    { name: "Instagram", icon: "Instagram" as const },
    { name: "Youtube", icon: "Youtube" as const },
    { name: "Facebook", icon: "Facebook" as const },
  ];

  return (
    <footer className="bg-gray-800 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-4">Кухня Стран Мира</h3>
        <p className="text-gray-400 mb-6">Открывайте новые вкусы каждый день</p>
        <div className="flex justify-center space-x-6">
          {socialLinks.map((link) => (
            <Icon
              key={link.name}
              name={link.icon}
              size={24}
              className="text-gray-400 hover:text-white cursor-pointer transition-colors"
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
