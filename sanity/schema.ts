import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";
import schedule from "./schemas/schedule";
import formation from "./schemas/formation";
import icon from "./schemas/icon";
import wellness from "./schemas/wellness";
import toning from "./schemas/toning";
import refining from "./schemas/refining";
import practice from "./schemas/practice";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [
		schedule,
		formation,
		icon,
		wellness,
		toning,
		refining,
    practice,
		blockContent,
	],
};
