import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "./ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { UserGraph } from "@/lib/types";
import GraphDetails from "./GraphDetails";

const UserGraphListItem = ({ data }: {
  data: UserGraph
}) => {
  return (
    <>
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline" className="w-full h-48 mx-auto md:w-min-48">{data.title}</Button>  
        </DrawerTrigger>  
        
        <GraphDetails data={data} />
      </Drawer>      
    </>
  );
};

export default UserGraphListItem;
