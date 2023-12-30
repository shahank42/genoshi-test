"use client";

import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import PricingCard from "@/components/PricingCard";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PRICING_TIERS } from "@/lib/config";
import { SERVICES_ICONS } from "@/lib/icons";
import Link from "next/link";

const AccountSettings = () => {
  return (
    <MaxWidthWrapper className="flex flex-col gap-9">
      <span className="text-3xl">Account Settings</span>

      <div className="flex flex-col gap-3">
        <span className="text-xl">Credentials</span>
        <div className="flex flex-col gap-7">
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">Name</Label>
            <Input name="name" className="w-full" value="Shounak Ghosh" />
            <div className="flex w-full justify-start md:justify-end">
              <Button>Update Name</Button>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="old-pass">Old Password</Label>
            <Input name="old-pass" className="w-full" />
            <Label htmlFor="new-pass">New Password</Label>
            <Input name="new-pass" className="w-full" />
            <Label htmlFor="conf-new-pass">Confirm New Password</Label>
            <Input name="conf-new-pass" className="w-full" />
            <div className="flex w-full justify-start md:justify-end">
              <Button>Update Password</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full items-center gap-5">
        <div className="flex w-full">
          <span className="text-xl">Current Plan</span>
        </div>
        {typeof window !== "undefined" &&
        localStorage.getItem("subscriptionTier") ? (
          <PricingCard
            data={
              PRICING_TIERS.filter(
                (tier) => tier.name === localStorage.getItem("subscriptionTier")
              )[0]
            }
          />
        ) : (
          <></>
        )}
        <Link className={buttonVariants({ variant: "link" })} href="/pricing">
          Manage Subscription Plan
        </Link>
      </div>

      <div className="flex flex-col w-full gap-4">
        <span className="text-xl">Link with external services</span>
        <div className="grid grid-cols-1 md:flex md:gap-5 md:justify-center gap-y-3 justify-items-center">
          {SERVICES_ICONS.map((service) => {
            return (
              <Button
                key={service.name}
                variant="secondary"
                className="w-48 h-24 bg-card hover:bg-card/70"
              >
                {service.Icon}
              </Button>
            );
          })}
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default AccountSettings;
