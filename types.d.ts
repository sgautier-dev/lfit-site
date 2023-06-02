type SocialType = {
    name: string;
    href: string;
    icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
};

interface Session {
    _id: string;
    start: string;
    end: string;
    course: string;
    description: string;
    icon: string;
    duration?: string;
  }
  
  interface Schedule {
    date: string;
    sessions: Session[];
  }
  
