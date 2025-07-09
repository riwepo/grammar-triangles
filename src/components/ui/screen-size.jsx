import { cn } from "@/lib/utils/css-class";

function ScreenSize({ className }) {
  return (
    <div className={cn("text-center text-xs", className)}>
      <p className="before:content-['phone'] md:before:content-['tablet'] lg:before:content-['laptop'] xl:before:content-['desktop'] 2xl:before:content-['big_desktop']">
        &nbsp;
      </p>
    </div>
  );
}

export default ScreenSize;
