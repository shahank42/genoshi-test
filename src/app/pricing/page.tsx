"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import PricingCard from "@/components/PricingCard";
import { PRICING_TIERS } from "@/lib/config";
import { useState } from "react";

const Pricing = () => {
  const [selectedTier, setSelectedTier] = useState<string>(
    (typeof window !== "undefined" &&
      localStorage.getItem("subscriptionTier")) ||
      ""
  );

  return (
    <MaxWidthWrapper className="flex flex-col gap-10">
      <span className="text-3xl">Pricing</span>
      <div className="pb-10 flex flex-col items-center md:grid md:grid-cols-2 lg:grid-cols-3 gap-y-5 md:justify-evenly md:justify-items-center md:gap-x-1">
        {PRICING_TIERS.map((tier) => {
          return (
            <PricingCard
              key={tier.name}
              data={tier}
              selected={selectedTier === tier.name}
              setSelectedTier={setSelectedTier}
            />
          );
        })}
      </div>
    </MaxWidthWrapper>
  );
};

export default Pricing;
