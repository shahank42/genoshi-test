import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full flex justify-evenly h-[100dvh] items-center">
      <div className="flex flex-col gap-5">
        <Link
          className={cn(buttonVariants({ variant: "default" }))}
          href="/profile"
        >
          Go to profile
        </Link>
        <Link
          className={cn(buttonVariants({ variant: "default" }))}
          href="/pricing"
        >
          Go to pricing
        </Link>
      </div>
    </div>
  );
}
