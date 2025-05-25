import { cn } from "@/lib/utils/css-class";

function Card({ children, className }) {
  return (
    <div className={cn(className, "rounded-lg p-4 shadow-md")}>{children}</div>
  );
}
export default Card;
