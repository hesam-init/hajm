import type {
	ShatelMobileInboxSchema,
	ShatelMobileProfileSchema,
	ShatelMobileRemainedSchema,
} from "@/services/shatel-mobile/models";
import type { z } from "zod";

export type RemainedResponse = z.infer<typeof ShatelMobileRemainedSchema>;
export type ProfileResponse = z.infer<typeof ShatelMobileProfileSchema>;
export type InboxResponse = z.infer<typeof ShatelMobileInboxSchema>;
