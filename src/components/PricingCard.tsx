import { PricingTier } from "@/lib/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction } from "react";

const PricingCard = ({
  data,
  selected = false,
  setSelectedTier,
}: {
  data: PricingTier;
  selected?: boolean;
  setSelectedTier: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <Card
      className={cn("w-[325px] h-[425px] md:h-[475px] flex flex-col", {
        "outline-dashed outline-4 outline-offset-8 outline-yellow-500": selected,
      })}
    >
      <CardHeader>
        <CardTitle className="text-2xl md:text-3xl">{data.title}</CardTitle>
        <span className="text-lg md:text-xl">${data.cost} / user / month</span>
        <CardDescription className="text-base md:text-lg">
          {data.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <ul className="list list-disc list-inside flex flex-col gap-2">
          {data.features.map((feature) => {
            return <li className="text-base md:text-lg">{feature}</li>;
          })}
        </ul>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button
          className="flex gap-5 text-base md:text-lg py-6 md:py-7"
          onClick={() => {
            setSelectedTier(data.name);
          }}
        >
          {data.cta}
          <ArrowRight />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
