import ehippo from "../assets/images/Projects/favicon.ico";
import uncover from "../assets/images/Projects/uncover.webp";
import bank from "../assets/images/Projects/bank.jpg";
import bloodBank from "../assets/images/Projects/bloodbank.webp";
import bookmark from "../assets/images/Projects/bookmark.jfif";
import expenseTracker from "../assets/images/Projects/expense-tracker.png";
import gocli from "../assets/images/Projects/gocli.jpg";
import keepNotes from "../assets/images/Projects/keepNotes.png";
import movieLand from "../assets/images/Projects/movieLand.jfif";
import npm from "../assets/images/Projects/chef.png";
import portfolio from "../assets/images/Projects/portfolio.jpg";
import videotube from "../assets/images/Projects/video-tube.png";
import house from "../assets/images/Projects/house.png";
import Xceltech from "../assets/images/Projects/download.jpg";

import {
	AiFillHtml5,
	BsDiamond,
	BsDroplet,
	SiPython,
	SiJupyter,
	DiDatabase,
	FaStripe,
	GiDiamondTrophy,
	GrDiamond,
	GrStripe,
	RiDrizzleFill,
	RiDrizzleLine,
	SiCss3,
	SiDart,
	SiExpress,
	SiFlutter,
	SiGo,
	SiMaterialui,
	SiPostgresql,
	SiMongodb,
	SiNextdotjs,
	SiNodedotjs,
	SiNpm,
	SiRedis,
	SiReact,
	SiRedux,
	SiStripe,
	SiSupabase,
	SiTailwindcss,
	SiDotnet,
	SiVite,
	SiFirebase,
	SiFigma,
	SiTypescript,
	DiPython,
	SiFlask,
	SiDjango,
	SiJavascript,
} from "react-icons/all";

export const PROJECTS = [
	{
		id: "project-200",
		title: "HR Management System",
		figma:
			"https://www.figma.com/design/e84bfh7vrz04NYhll2ij0e/HRMS(Human-Resource-management-system---Employee-mnagement-System)---HIgh-fidelity-(Community)?node-id=0-1&node-type=canvas",
		github: "https://github.com/amanjnc/XcelTech.HRMS/tree/crud-features",
		link: "",
		image: Xceltech,
		content: "",
		stack: [
			{
				id: "icon-0",
				icon: SiFigma,
				name: "Figma",
			},
			{
				id: "icon-1",
				icon: SiNextdotjs,
				name: "NextJs",
			},
			{
				id: "icon-2",
				icon: SiDotnet,
				name: "Dotnet",
			},
			{
				id: "icon-3",
				icon: SiReact,
				name: "React",
			},
			{
				id: "icon-5",
				icon: SiPostgresql,
				name: "PostgresQL",
			},
			{
				id: "icon-6",
				icon: SiTailwindcss,
				name: "Tailwind css",
			},
			{
				id: "icon-1",
				icon: SiRedis,
				name: "Redis",
			},
		],
	},
	{
		id: "project-4",
		title: "Movie Land",
		figma:
			"https://www.figma.com/design/cLxcdnSMLwLZ4XnGvnZ6YM/MOVIE-REVIEW-(Community)?t=uFNrZTI9xtOk3avz-0",
		github: "https://github.com/Yani-201/Movie_Review",
		link: "",
		image: movieLand,
		content:
			"A web application that easily provides guidance and Reviews about any Movies & Tv shows.",
		stack: [
			{
				id: "icon-1",
				icon: SiJavascript,
				name: "React",
			},
			{
				id: "icon-5",
				icon: SiCss3,
				name: "CSS",
			},
		],
	},
	{
		id: "project-1",
		title: "Face Recognition App",
		github: "https://github.com/amanjnc/Face-Recognition-Attendance-System",
		link: "",
		image: bookmark,
		content:
			"From scratch implementation of FisherFace-doesn't use any libraries .A full-stack mobile application that allows user to Detect and Recognize different Faces Users can Add Faces to the Db by uploading picture or taking a photo live then.",
		stack: [
			{
				id: "icon-1",
				icon: SiPython,
				name: "Python",
			},
			{
				id: "icon-2",
				icon: SiDart,
				name: "Dart",
			},
			{
				id: "icon-2",
				icon: SiFlutter,
				name: "Flutter",
			},
			{
				id: "icon-4",
				icon: SiFlask,
				name: "Flask",
			},
			{
				id: "icon-3",
				icon: SiJupyter,
				name: "Jupyter Notebook",
			},
		],
	},
	{
		id: "project-201",
		title: "Consultancy and Training WebApp",
		figma:
			"https://www.figma.com/design/MMqBxFYFPnHMMaghWZVenE/Consultancy-and-Training-Company-(Community)?node-id=0-1&node-type=canvas&t=hNAWUCG3oysijRsC-0",
		github: "",
		link: "",
		image: uncover,
		content:
			"A Website made for a Consultancy and Training company. It includes signing Up, Appointment Booking, Course materials, ...   .",
		stack: [
			{
				id: "icon-1",
				icon: SiNextdotjs,
				name: "NextJs",
			},
			{
				id: "icon-2",
				icon: SiFirebase,
				name: "Firebase",
			},
			{
				id: "icon-3",
				icon: SiReact,
				name: "React",
			},
			{
				id: "icon-5",
				icon: SiPostgresql,
				name: "PostgresQL",
			},
			{
				id: "icon-6",
				icon: SiTailwindcss,
				name: "Tailwind css",
			},
		],
	},
	{
		id: "project-101",
		title: "Chef's Table",
		github: "https://github.com/Yani-201/Chefs-Table",
		link: "",
		image: npm,
		content:
			"ChefTable is a platform for chefs to share their recipes with fellow food enthusiasts. Food enthusiasts can leave a rating and review on these recipes that will impact how many more people a recipe will reach",
		stack: [
			{
				id: "icon-4",
				icon: SiFlutter,
				name: "Flutter",
			},
			{
				id: "icon-2",
				icon: SiDart,
				name: "Dart",
			},
			{
				id: "icon-1",
				icon: SiReact,
				name: "React",
			},
			{
				id: "icon-2",
				icon: SiTailwindcss,
				name: "Tailwind CSS",
			},

			{
				id: "icon-5",
				icon: SiTypescript,
				name: "TypeScript",
			},

			{
				id: "icon-3",
				icon: SiVite,
				name: "Vite",
			},
		],
	},
	{
		id: "project-9",
		title: "Expense Tracker",
		figma:
			"https://www.figma.com/design/Z1329tNXoVMiK1GutYU2k5/Personal-Expense-Tracker-(Community)?m=auto&is-community-duplicate=1&fuid=1179985258225232066",
		github: "https://github.com/amanjnc/Personal-Expense-Tracker",
		link: "",
		image: expenseTracker,
		content:
			"An application Designed In Figma and developed using Flutter that helps to track the overall expenses made.",
		stack: [
			{
				id: "icon-1",
				icon: SiFigma,
				name: "Figma",
			},
			{
				id: "icon-1",
				icon: SiFlutter,
				name: "Flutter",
			},
			{
				id: "icon-2",
				icon: SiDart,
				name: "Dart",
			},
		],
	},
	{
		id: "project-3",
		title: "Amharic Braille Reader",
		github: "https://github.com/amanjnc/Amharic-Braille-Reader",
		link: "",
		image: keepNotes,
		content:
			"The Amharic Braille Reader is an AI system designed to recognize and convert Amharic Braille characters in images to text. It employs RetinaNet and other machine learning techniques to process Braille characters and extract meaningful information. ",
		stack: [
			{
				id: "icon-1",
				icon: SiPython,
				name: "Python",
			},
			{
				id: "icon-1",
				icon: SiDjango,
				name: "Django",
			},
			{
				id: "icon-2",
				icon: SiJupyter,
				name: "Jupyter Notebook",
			},
		],
	},

	{
		id: "Project 6",
		title: "Addis House Finder",
		figma:
			"https://www.figma.com/design/H0eoCFxGxClP6l2nINUrm7/Addis-House-Finder-(Community)?node-id=0-1&node-type=canvas&t=LbFDEAyAddY7d0oP-0",
		github: "",
		link: "",
		image: house,
		content:
			"A  web application Design  for people looking to rent,buy or sell houses.",
		stack: [
			{
				id: "icon-1",
				icon: SiFigma,
				name: "React",
			},

			{
				id: "icon-3",
				icon: SiMaterialui,
				name: "Redux Toolkit",
			},
		],
	},

	{
		id: "project-2",
		title: "Bank's Landing Page",
		github: "https://github.com/amanjnc/bank_modern_app",
		link: "https://amanjnc.github.io/bank_modern_app/",
		image: bank,
		content:
			"A landing page for a bank with modern UI/UX using React and Tailwind.",
		stack: [
			{
				id: "icon-1",
				icon: SiReact,
				name: "React",
			},
			{
				id: "icon-2",
				icon: SiTailwindcss,
				name: "Tailwind CSS",
			},
		],
	},
	{
		id: "project-8",
		title: "Personal Portfolio",
		github: "https://github.com/amanjnc/",
		link: "",
		image: portfolio,
		content: "Personal portfolio website with React and Tailwind CSS.",
		stack: [
			{
				id: "icon-1",
				icon: SiReact,
				name: "React",
			},
			{
				id: "icon-2",
				icon: SiTailwindcss,
				name: "Tailwind CSS",
			},
			{
				id: "icon-3",
				icon: SiCss3,
				name: "CSS",
			},
		],
	},
];
