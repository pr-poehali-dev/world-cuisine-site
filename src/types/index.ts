export interface Country {
  name: string;
  flag: string;
  dish: string;
  description: string;
  image: string;
  difficulty: "Легкий" | "Средний" | "Сложный";
  time: string;
}

export type DifficultyLevel = Country["difficulty"];
