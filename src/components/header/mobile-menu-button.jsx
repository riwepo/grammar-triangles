import CloseOutlineIcon from "@/components/ui/icons/close-outline-icon";
import MenuOutlineIcon from "@/components/ui/icons/menu-outline-icon";
import { cn } from "@/lib/utils/css-class";

function MobileMenuButton({ isNavOpen, onClick, className }) {
  return (
    <div className={cn("z-60", className)}>
      {isNavOpen && (
        <button
          aria-label="close"
          className="inline-block md:hidden"
          onClick={onClick}
        >
          <CloseOutlineIcon className="w-12" />
        </button>
      )}
      {!isNavOpen && (
        <button
          aria-label="menu"
          className="inline-block md:hidden"
          onClick={onClick}
        >
          <MenuOutlineIcon className="w-12" />
        </button>
      )}
    </div>
  );
}

export default MobileMenuButton;
