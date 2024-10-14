import Ubuntu from "../assets/images/Projects/Ubuntu.jpg";
import acm from "../assets/images/Experience/UIUC.png";
import XcelTech from "../assets/images/Projects/Xcel.jpg";
import Freelance from "../assets/images/Experience/Freelance.png";

import {
	SiAdobexd,
	SiAntdesign,
	SiDocker,
	SiDotnet,
	SiFigma,
	SiFramer,
	SiJava,
	SiMaterialui,
	SiNestjs,
	SiPostgresql,
	SiPrisma,
	SiPython,
	SiReact,
	SiRedis,
	SiTypescript,
	TbBrandReactNative,
} from "react-icons/all";

export const EXPERIENCES = [
	{
		organisation: "Xceltech Technology Solutions",
		logo: XcelTech,
		link: "",
		positions: [
			{
				title: "UI/UX",
				duration: "april 2024 - may 2024",
				content: [
					{
						text: "Worked on code Debugging(Java)",
						link: "https://www.figma.com/design/e84bfh7vrz04NYhll2ij0e/HRMS(Human-Resource-management-system---Employee-mnagement-System)---HIgh-fidelity-(Community)?node-id=0-1&node-type=canvas",

						tech: [
							{
								id: "f-1",
								icon: SiFigma,
								name: "Figma",
							},
							{
								id: "f-1",
								icon: SiFramer,
								name: "Framer",
							},
						],
					},
				],
			},
			,
			{
				title: ".Net Backend Engineer",
				duration: "Jan 2024 - ",
				content: [
					{
						id: "f-1",
						icon: SiFigma,
						name: "Figma",
					},
					{
						text: "Working on Full stack projects and App development with Agile Methodology.",
						link: "https://github.com/amanjnc/XcelTech.HRMS/tree/crud-features",
						tech: [
							{
								id: "f-2",
								icon: SiDotnet,
								name: ".Net",
							},
							{
								id: "f-1",
								icon: SiReact,
								name: "ReactJS",
							},
							{
								id: "f-5",
								icon: SiNestjs,
								name: "NestJS",
							},
							{
								id: "f-3",
								icon: SiPostgresql,
								name: "PostgresQl",
							},
							{
								id: "f-4",
								icon: SiDocker,
								name: "Docker",
							},

							{
								id: "f-6",
								icon: SiRedis,
								name: "Redis",
							},
						],
					},
				],
			},
		],
	},
	{
		organisation: "Ubuntu Consultancy",
		logo: Ubuntu,
		link: "https://ubuntuconsulting-ethiopia.com/",
		positions: [
			{
				title: "Web Designer(UI/UX)",
				duration: "Jan 2023",
				content: [
					{
						text: "Changed the design of the existing companies website by including new features in multiple space..",
						link: "https://www.figma.com/design/MMqBxFYFPnHMMaghWZVenE/Consultancy-and-Training-Company-(Community)?node-id=0-1&node-type=canvas&t=hNAWUCG3oysijRsC-0",

						tech: [
							{
								id: "f-1",
								icon: SiFigma,
								name: "Figma",
							},
							{
								id: "f-1",
								icon: SiAdobexd,
								name: "AdobeXd",
							},
							{
								id: "f-2",
								icon: SiMaterialui,
								name: "Material UI",
							},
						],
					},
				],
			},
		],
	},
	{
		organisation: "UIUC",
		logo: acm,
		link: "https://illinois.edu/",
		positions: [
			{
				title: "Research Intern",
				duration: "april 2024 - Aug 2024",
				content: [
					{
						text: "Worked on  identifying what kind of mutations occured to code if any, and code Debugging(Java)",
						link: "https://github.com/summer-research-program",
						tech: [
							{
								id: "f-1",
								icon: SiJava,
								name: "Java",
							},
						],
					},
				],
			},
		],
	},
	{
		organisation: "Freelance",
		logo: Freelance,
		link: "",
		positions: [
			{
				title: "UI/UX Designer",
				duration: "april 2024 - Aug 2024",
				content: [
					{
						text: "Worked on Designing multiple high fidelity wireframes",
						link: "https://www.figma.com/design/H0eoCFxGxClP6l2nINUrm7/Addis-House-Finder-(Community)?node-id=0-1&node-type=canvas&t=LbFDEAyAddY7d0oP-0",
						tech: [
							{
								id: "f-1",
								icon: SiFigma,
								name: "Figma",
							},
							{
								id: "f-1",
								icon: SiFramer,
								name: "Framer",
							},
						],
					},
				],
			},
		],
	},
];
