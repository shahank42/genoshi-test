import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { Folder, Star } from "lucide-react";
import { Collection } from "@/lib/types";

const CollectionItem = ({ data }: {
  data: Collection
}) => {
  return (
    <div
      className={cn(
        buttonVariants({ variant: "outline" }),
        "px-6 py-12 md:py-14 flex w-full justify-between hover:cursor-pointer"
      )}
    >
      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <span className="text-xl">{data.title}</span>
          <span className="text-md">{data.description}</span>
        </div>
        <span className="text-md opacity-50">{data.numberPapers} papers</span>
      </div>
      <div className="w-10 h-10 flex justify-center items-center">
        <Folder className="w-7 h-7" />
      </div>
    </div>
  );
};

export default CollectionItem;
