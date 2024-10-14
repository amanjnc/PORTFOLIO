import Hero_person from "../assets/images/Hero/main_comp.json";

export { SOCIAL_MEDIA } from './socialMedia';
export { SKILLS_LIST } from './skillsList';
export { EXPERIENCES } from './experience';
export { EDUCATION_LIST } from './education';
export { PROJECTS } from './projects';
export { OPEN_SOURCE_CONTRIBUTIONS } from './openSource';

export const RESUME_LINK ="file:///C:/Users/yeabb/Downloads/Amanuel-Beyene-FlowCV-Resume-20241011%20(2).pdf";
export const REPO_LINK = "https://github.com/amanjnc/PORTFOLIO";

export const CONTENT = {
    navs: [
        {
            link: "#skills",
            title: "Skills & Experience",
        },
        {
            link: "#education",
            title: "Education",
        },
        {
            link: "#projects",
            title: "Projects",
        },
        {
            link: "#openSrc",
            title: "Open Source",
        },
        {
            link: "#contact",
            title: "Contact Me",
        },
    ],
    hero: {
        title: `Hello,`,
        sub1: "there",
        sub2: "I am",
        firstName: "Amanuel",
        LastName: "Beyene",
        image: Hero_person,
        hero_content: [
            {
                count: "",
                text: "Designer and Developer based in Ethiopia. ",
            },
        ],
    },

    Footer: {
        text: "All © Copy Right Reserved 2024",
    },
};

export const ABOUT_ME = {
	name: "Amanuel Beyene",
	tagLine:
		"An ambitious Developer | .Net Backend Developer @XcelTech solutions | Former Research intern @UIUC |",
	intro: CONTENT.hero.hero_content.text,
};
