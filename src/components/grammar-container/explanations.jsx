import { cn } from "@/lib/utils/css-class";

function Explanations({ className, children }) {
  return <div className={cn("", className)}>{children}</div>;
}

export default Explanations;
