import type { InboxModel } from "@/services/shatel-mobile/models/inbox";
import type { ProfileModel } from "@/services/shatel-mobile/models/profile";
import type { RemainedModel } from "@/services/shatel-mobile/models/remained";
import type { z } from "zod";

export type RemainedResponse = z.infer<typeof RemainedModel>;
export type ProfileResponse = z.infer<typeof ProfileModel>;
export type InboxResponse = z.infer<typeof InboxModel>;
