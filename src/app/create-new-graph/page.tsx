"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { HexColorPicker } from "react-colorful";

const CreateNewGraph = () => {
  const [color, setColor] = useState<string>("#fffff")

  return (
    <MaxWidthWrapper>
      <div className="flex flex-col w-full gap-7 md:gap-9">
        <span className="w-full text-3xl">Create New Graph</span>

        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Name your graph!</Label>
          <Input name="name" />
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="description">{"Add a description (optional)"}</Label>
          <Textarea name="name" />
        </div>

        <div className="flex flex-col gap-5">
          <Label>{"Chooe your graph's layout"}</Label>
          <div className="flex flex-col items-center md:flex-row w-full justify-center gap-5">
            {[1, 2, 3].map((layout) => {
              return <Button variant="secondary" className="w-48 h-48" />;
            })}
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <Label>What color would you like your graph to be?</Label>
          <div className="flex w-full justify-center">
            <HexColorPicker color={color} onChange={setColor} />
          </div>
          <span className="flex w-full justify-center">{color}</span>
        </div>
        
        <div className="flex flex-col gap-5">
          <Label>Preview Graph Visualization</Label>
          <div className="flex w-full justify-center">
            <Card className="w-[600px] h-[400px] bg-secondary"></Card>
          </div>
        </div>

        <div className="flex w-full justify-start md:justify-end">
          <Button>Create Graph</Button>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default CreateNewGraph;
