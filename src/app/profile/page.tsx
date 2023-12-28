import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import UserCard from "@/components/UserCard";
import UserGraphList from "@/components/UserGraphList";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { USER_GRAPHS } from "@/lib/config";

const Profile = () => {
  return (
    <MaxWidthWrapper className="flex flex-col md:flex-row gap-5 justify-between">
      <div className="md:w-[600px]">
        <UserCard />
      </div>
      <div className="flex-grow w-full">
        <Tabs defaultValue="my-graphs" className="w-full">
          <TabsList className="w-full flex">
            <TabsTrigger className="w-full" value="my-graphs">
              My Graphs
            </TabsTrigger>
            <TabsTrigger className="w-full" value="paper-collections">
              Paper Collections
            </TabsTrigger>
          </TabsList>
          <TabsContent value="my-graphs" className="py-7 px-2">
            <UserGraphList />
          </TabsContent>
          <TabsContent value="paper-collections">2</TabsContent>
        </Tabs>
      </div>
    </MaxWidthWrapper>
  );
};

export default Profile;
