interface Base {
	_id: string;
	_type: string;
	_createdAt: string;
	_updatedAt: string;
}

interface Empty {
  empty: true;
}

type SocialType = {
	name: string;
	href: string;
	icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
};

interface BlockContent {
	_type: "block" | "image";
	style?: string;
	list?: string;
	marks?: {
		decorators?: { title: string; value: string }[];
		annotations?: Annotation[];
	};
	children?: BlockContent[];
	alt?: string; // For 'image' type
	asset?: Image;
}

interface Session extends Base {
	start: string;
	end: string;
	course: string;
	description: string;
	icon: string;
	duration?: string;
}

interface Schedule extends Base {
	date: string;
	sessions: Session[];
}

interface Hero extends Base {
	title: string;
	text: string;
}

interface Icon extends Base {
	title: string;
	value: string;
}

interface Formation extends Base {
	title: string;
	description: string;
	icon: Icon;
}

interface Diploma extends Base {
	title: string;
	image: string;
}

interface Training extends Base {
	title: string;
	presentation: string;
	backgroundImage: string;
	formations: Formation[];
	diplomas: Diploma[];
}

interface Cours extends Base {
	mainTitle: string;
	presentation: string;
	title: string;
	text: BlockContent,
	backgroundImage: string;
	secondaryImage: string;
}

interface Practice extends Base {
  name: string;
	icon: Icon;
	description: string;
}

interface CoursSubSections extends Base {
	title: string;
	presentation: string;
	backgroundImage: Image;
	practices: Practice[];
}

interface Seance extends Base  {
  title: string;
  presentation: string;
  backgroundImage: string;
  schedule: Schedule[];
}

interface Coaching extends Base {
	mainTitle: string;
	presentation: string;
	title: string;
	text: BlockContent,
	backgroundImage: string;
	secondaryImage: string;
}


interface Contact extends Base {
	mainTitle: string;
	presentation: string;
	image: string;
}