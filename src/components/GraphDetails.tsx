import { UserGraph } from "@/lib/types";
import MaxWidthWrapper from "./MaxWidthWrapper";
import {
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "./ui/drawer";
import { ArrowLeft, ArrowRight, Edit, Share, Trash } from "lucide-react";
import { Button } from "./ui/button";

const GraphDetails = ({ data }: { data: UserGraph }) => {
  return (
    <DrawerContent>
      <MaxWidthWrapper className="flex w-full justify-center">
        <div className="md:px-20 flex flex-col gap-3">
          <DrawerHeader className="px-0 flex flex-col md:flex-row gap-5 w-full justify-between">
            <div className="flex flex-col gap-2">
              <DrawerTitle className="text-3xl">{data.title}</DrawerTitle>
              <DrawerDescription className="text-md">
                {data.description}
              </DrawerDescription>
            </div>
            <Button className="flex gap-3 md:max-w-52">
              Go to Graph! <ArrowRight />
            </Button>
          </DrawerHeader>

          <span className="text-sm opacity-75">
            Created on {data.dateCreated}
          </span>

          <span className="text-xl">Papers Used</span>

          <div className="flex w-full gap-2 justify-end">
            <Button variant="default" className="w-10 h-10 p-0">
              <Share className="w-6 h-6" />
            </Button>
            <Button variant="default" className="w-10 h-10 p-0">
              <Edit className="w-6 h-6" />
            </Button>
            <Button variant="destructive" className="w-10 h-10 p-0">
              <Trash className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </MaxWidthWrapper>
    </DrawerContent>
  );
};

export default GraphDetails;
