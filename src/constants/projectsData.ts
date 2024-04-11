export type ProjectsProp = {
  id: number;
  imgCover: string;
  title: string;
  livePreview: string;
  sourceCode: string;
};

export const projectsData: ProjectsProp[] = [
  {
    id: 1,
    imgCover: "odin-calculator.webp",
    title: "CALCULATOR",
    livePreview: "https://luyvannda.github.io/odin-calculator/",
    sourceCode: "https://github.com/luyvannda/odin-calculator",
  },

  {
    id: 2,
    imgCover: "sign-up-form.webp",
    title: "SIGN UP FORM",
    livePreview: "https://luyvannda.github.io/sign-up-form/",
    sourceCode: "https://github.com/luyvannda/sign-up-form/",
  },

  {
    id: 3,
    imgCover: "workation.webp",
    title: "WORKATION",
    livePreview: "https://luyvannda.github.io/workation/",
    sourceCode: "https://github.com/luyvannda/workation",
  },

  {
    id: 4,
    imgCover: "pizza-menu.webp",
    title: "PIZZA MENU",
    livePreview: "https://luyvannda.github.io/pizza-menu/",
    sourceCode: "https://github.com/luyvannda/pizza-menu",
  },

  {
    id: 5,
    imgCover: "tesla-landing-page.webp",
    title: "TESLA LANDING PAGE",
    livePreview: "https://luyvannda.github.io/tesla-landing-page/",
    sourceCode: "https://github.com/luyvannda/tesla-landing-page",
  },

  {
    id: 6,
    imgCover: "next-portfolio.webp",
    title: "NEXT PORTFOLIO ",
    livePreview: "https://luyvannda.vercel.app/",
    sourceCode: "https://github.com/luyvannda/next-web-portfolio",
  },
];
