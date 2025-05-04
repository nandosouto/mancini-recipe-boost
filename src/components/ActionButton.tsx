
import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "accept" | "decline";
  children: React.ReactNode;
  className?: string;
}

const ActionButton = ({ 
  variant, 
  children, 
  className,
  ...props 
}: ActionButtonProps) => {
  return (
    <button
      className={cn(
        "w-full py-4 px-6 text-lg md:text-xl font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg",
        variant === "accept" 
          ? "bg-green-600 hover:bg-green-700 text-white" 
          : "bg-gray-200 hover:bg-gray-300 text-gray-700",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default ActionButton;
