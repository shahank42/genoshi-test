import { UserGraph } from "@/lib/types"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle } from "./ui/drawer"

const GraphDetails = ({ data }: {
  data: UserGraph
}) => {
  return (
    <DrawerContent>
      <MaxWidthWrapper>
        <DrawerHeader>
          <DrawerTitle>{data.title}</DrawerTitle>
          <DrawerDescription>{data.description}</DrawerDescription>
        </DrawerHeader>
      </MaxWidthWrapper>
    </DrawerContent>
  )
}

export default GraphDetails;