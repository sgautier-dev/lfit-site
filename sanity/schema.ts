import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";
import schedule from "./schemas/schedule";
import formation from "./schemas/formation";
import formations from "./schemas/formations";
import icon from "./schemas/icon";
import wellness from "./schemas/wellness";
import toning from "./schemas/toning";
import refining from "./schemas/refining";
import practice from "./schemas/practice";
import hero from "./schemas/hero";
import diploma from "./schemas/diploma";
import cours from "./schemas/cours";
import seances from "./schemas/seances";
import coaching from "./schemas/coaching";
import contact from "./schemas/contact";
import videos from "./schemas/videos";

export const schema: { types: SchemaTypeDefinition[] } = {
	types: [
		schedule,
		formation,
		formations,
		icon,
		wellness,
		toning,
		refining,
		practice,
		hero,
		diploma,
		cours,
		seances,
		coaching,
		contact,
		videos,
		blockContent,
	],
};
