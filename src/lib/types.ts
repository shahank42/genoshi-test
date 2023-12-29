import { PRICING_TIERS, TEST_COLLECTIONS, TEST_PAPERS, USER_GRAPHS } from "./config";

export type UserGraph = (typeof USER_GRAPHS)[number];
export type Paper = (typeof TEST_PAPERS)[number];
export type Collection = (typeof TEST_COLLECTIONS)[number];
export type PricingTier = (typeof PRICING_TIERS)[number];