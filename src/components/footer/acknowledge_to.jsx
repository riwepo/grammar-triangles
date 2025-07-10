import Link from "next/link";

import { cn } from "@/lib/utils/css-class";

function AcknowledgeTo({ className }) {
  return (
    <div className={cn("flex flex-col items-center", className)}>
      <Link
        href="/acknowledgements"
        prefetch={false}
        className="underline hover:text-blue-500"
      >
        <div className="flex flex-col items-center">
          <p>Acknowledgements</p>
          <p>to</p>
          <p>Rita Whatshername</p>
        </div>
      </Link>
    </div>
  );
}

export default AcknowledgeTo;
