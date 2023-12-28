import { Star } from "lucide-react";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import CollectionItem from "./CollectionItem";
import { TEST_COLLECTIONS } from "@/lib/config";

const MyCollections = () => {
  return (
    <div className="flex flex-col gap-10 w-full">
      <div className="flex w-full">
        <div
          className={cn(
            buttonVariants({ variant: "outline" }),
            "px-6 py-10 flex w-full justify-between hover:cursor-pointer"
          )}
        >
          <div className="flex flex-col">
            <span className="text-xl">Favorite Papers</span>
            <span className="text-md opacity-50">3 papers</span>
          </div>
          <div className="w-10 h-10 flex justify-center items-center">
            <Star className="w-7 h-7" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 w-full">
        <span className="text-xl">My Collections</span>
        <div className="flex flex-col gap-2">
          {TEST_COLLECTIONS.map((collection) => {
            return <CollectionItem key={collection.id} data={collection} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MyCollections;
