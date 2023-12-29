import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { Settings } from "lucide-react"
import { Avatar, AvatarImage } from "./ui/avatar";

const UserCard = () => {
  return (
    <Card>
      <CardHeader>
        <Avatar className="rounded-md w-32 md:w-48 h-32 md:h-48">
          <AvatarImage src="https://avatars.githubusercontent.com/u/31540054"></AvatarImage>
        </Avatar>
        <CardTitle>Shounak Ghosh</CardTitle>
        <CardDescription>shounakghosh42@gmail.com</CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-3">
        <ul>
          <li>Subscription: Basic Plan</li>
          <li>Graphs Created: 3/10</li>
          <li>Chatbot Queries: 200/500</li>
        </ul>

        <span className="opacity-50 text-sm">
          Quota complete? <Link href="/pricing" className={cn(buttonVariants({variant: "link"}), "px-0")}> Consider upgrading your plan</Link>
        </span>

        <div className="w-full flex justify-center">
          <Button variant="secondary" className="flex gap-2 w-full">Accout Settings <Settings /></Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserCard;
