export type HomeStat = {
  id: string;
  variant: "metric" | "badges" | "text";
  label: string;
  value?: number;
  prefix?: string;
  suffix?: string;
  display?: string;
  badges?: string[];
};

export const HOME_STATS: HomeStat[] = [
  {
    id: "years",
    variant: "metric",
    label: "Years Experience",
    value: 10,
    suffix: "+",
  },
  {
    id: "projects",
    variant: "metric",
    label: "Projects Completed",
    value: 200,
    suffix: "+",
  },
  {
    id: "compliance",
    variant: "badges",
    label: "Compliance",
    badges: ["IMO", "SOLAS", "MARINA"],
  },
  {
    id: "operations",
    variant: "text",
    label: "Operations",
    display: "8 Regional Hubs",
  },
];
