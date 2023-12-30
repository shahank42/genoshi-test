import { Paper } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "./ui/button";
import { Bookmark, Star } from "lucide-react";

const PaperItem = ({ data }: { data: Paper }) => {
  return (
    <div
      className={cn(
        buttonVariants({ variant: "outline" }),
        "flex justify-between py-7"
      )}
    >
      <div>
        {data.title.length > 25 ? `${data.title.slice(0, 22)}...` : data.title}
      </div>
      <div className="flex gap-2">
        <Button variant="secondary" className="w-8 h-8 p-0">
          <Star className="w-5 h-5" />
        </Button>
        <Button variant="secondary" className="w-8 h-8 p-0">
          <Bookmark className="w-5 h-5" />
        </Button>
      </div>
    </div>
    // <div className={cn(buttonVariants({variant: "outline"}))}>pakkkkkkkkkkkkkkkkkkkkkkkkk</div>
  );
};

export default PaperItem;
