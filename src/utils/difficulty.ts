import { DifficultyLevel } from "@/types";

export const getDifficultyColor = (difficulty: DifficultyLevel): string => {
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
