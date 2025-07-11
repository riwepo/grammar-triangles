import { cn } from "@/lib/utils/css-class";

function WebDesignBy({ className }) {
  return (
    <div className={cn("flex flex-col items-center", className)}>
      <p>
        © 2025{" "}
        <a
          href="mailto:riwepo.au@gmail.com.com"
          className="underline hover:text-blue-500"
        >
          riwepo
        </a>
      </p>
      <p>All rights reserved</p>
    </div>
  );
}

export default WebDesignBy;
