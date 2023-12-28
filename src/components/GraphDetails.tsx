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
import { TEST_PAPERS } from "@/lib/config";
import PaperItem from "./PaperItem";

const GraphDetails = ({ data }: { data: UserGraph }) => {
  return (
    <DrawerContent>
      <MaxWidthWrapper className="flex w-full justify-center">
        <div className="md:px-20 py-3 md:py-10 flex flex-col gap-3">
          <DrawerHeader className="p-0">
            <div className="flex flex-col md:flex-row gap-5 w-full justify-between">
              <div className="flex flex-col gap-2">
                <DrawerTitle className="text-3xl">{data.title}</DrawerTitle>
                <DrawerDescription className="text-md">
                  {data.description}
                </DrawerDescription>
              </div>
              <Button className="flex gap-3 md:max-w-52">
                Go to Graph! <ArrowRight />
              </Button>
            </div>
            <span className="text-sm opacity-75">
              Created on {data.dateCreated}
            </span>
          </DrawerHeader>

          <div className="flex w-full gap-2 justify-center md:justify-start">
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

          <span className="text-xl mt-7">Papers Used</span>

          <div className="flex flex-col gap-2 md:px-5">
            {TEST_PAPERS.map((paper) => {
              return (
                <PaperItem key={paper.id} data={paper} />
                // <p>s</p>
              )
            })}
          </div>

        </div>
      </MaxWidthWrapper>
    </DrawerContent>
  );
};

export default GraphDetails;
