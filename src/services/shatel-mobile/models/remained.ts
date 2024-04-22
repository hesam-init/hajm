import { z } from "zod";

export const RemainedModel = z.object({
	credit: z.string(),
	internet_packages: z.array(z.any()),
	internet_percent: z.array(z.string()),
	internet_used: z.string(),
	internet_used_unit: z.string(),
	sms_packages: z.array(z.any()),
	sms_percent: z.string(),
	sms_used: z.string(),
	voice_packages: z.array(z.any()),
	voice_percent: z.string(),
	voice_used: z.string(),
});
