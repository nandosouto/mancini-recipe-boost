
import { Check } from "lucide-react";

interface RecipeCardProps {
  title: string;
  description: string;
}

const RecipeCard = ({ title, description }: RecipeCardProps) => {
  return (
    <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
      <Check className="text-green-600 h-5 w-5 mt-1 flex-shrink-0" />
      <div>
        <h3 className="font-bold text-green-800">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default RecipeCard;
