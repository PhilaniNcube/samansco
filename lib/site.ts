export type Division = {
  href: string;
  name: string;
  shortName: string;
  chip: string;
  summary: string;
};

export const divisions: Division[] = [
  {
    href: "/industries",
    name: "Samansco Industries",
    shortName: "Industries",
    chip: "EPC & DISTRIBUTION",
    summary: "Solar EPC, heavy equipment supply and water infrastructure.",
  },
  {
    href: "/energy",
    name: "Samansco Energy",
    shortName: "Energy",
    chip: "UTILITY & TRADING",
    summary: "PPAs, SAPP wholesale trading and Virtual Power Plants.",
  },
  {
    href: "/maintenance",
    name: "Samansco Maintenance",
    shortName: "Maintenance",
    chip: "O&M & MONITORING",
    summary: "SCADA monitoring, preventive service and field repairs.",
  },
  {
    href: "/carbon",
    name: "Samansco Carbon",
    shortName: "Carbon",
    chip: "I-RECs & ESG",
    summary: "I-RECs, verified carbon credits and ESG advisory.",
  },
];

export const navigation = [
  { href: "/", label: "Overview" },
  ...divisions.map(({ href, shortName }) => ({ href, label: shortName })),
];

export const headOffice = {
  street: "331 Samora Machel Avenue",
  suburb: "Eastlea, Harare",
  country: "Zimbabwe",
  phone: "+263 242 480484",
  email: "info@samansco.com",
};
