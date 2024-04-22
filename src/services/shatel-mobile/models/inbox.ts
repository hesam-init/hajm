import { z } from "zod";

export const InboxModel = z.object({
	fiscal_id: z.string(),
	id: z.number(),
	messages: z
		.object({
			action: z.string(),
			id: z.number(),
			m_type: z.string(),
			offer_id: z.number(),
			seen: z.boolean(),
			text_ar: z.string(),
			text_en: z.string(),
			text_fa: z.string(),
			title_ar: z.string(),
			title_en: z.string(),
			title_fa: z.string(),
		})
		.array(),
	new_messages_count: z.number(),
});
