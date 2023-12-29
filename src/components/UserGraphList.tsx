import { UserGraph } from "@/lib/types";
import UserGraphListItem from "./UserGraphListItem";
import { Button, buttonVariants } from "./ui/button";
import { Input } from "./ui/input";
import { USER_GRAPHS } from "@/lib/config";
import Link from "next/link";

const UserGraphList = () => {
  return (
    <div className="flex flex-col gap-3 lg:gap-5">
      <div className="flex flex-col-reverse lg:flex-row gap-5 justify-between">
        <Input placeholder="Search my graphs..." />
        {/* <Button>New Graph</Button> */}
        <Link
          href="/create-new-graph"
          className={buttonVariants({ variant: "default" })}
        >
          New Graph
        </Link>
      </div>
      <div className="flex flex-col gap-3 justify-center md:grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 md:gap-x-2 md:gap-y-2">
        {USER_GRAPHS.map((graph) => {
          return <UserGraphListItem key={graph.id} data={graph} />;
        })}
      </div>
    </div>
  );
};

export default UserGraphList;
