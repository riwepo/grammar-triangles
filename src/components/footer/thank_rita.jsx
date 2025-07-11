import Link from "next/link";

import { cn } from "@/lib/utils/css-class";

function ThankRita({ className }) {
  return (
    <div className={cn("flex flex-col items-center", className)}>
      <Link
        href="/rita-baker"
        prefetch={false}
        className="underline hover:text-blue-500"
      >
        <div className="flex flex-col items-center">
          <p>Thanks</p>
          <p>Rita Baker</p>
        </div>
      </Link>
    </div>
  );
}

export default ThankRita;
