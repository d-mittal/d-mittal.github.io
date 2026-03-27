// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-repositories",
          title: "Repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-phd-defence-announcement-dhruv-mittal-i-will-defend-my-phd-thesis-tipping-the-social-balance-computational-perspectives-on-the-dynamics-of-collective-behavior-social-transitions-and-policy-interventions-on-tuesday-7-april-2026-at-13-00-at-the-agnietenkapel-university-of-amsterdam-event-details-date-tuesday-7-april-2026-time-13-00-venue-agnietenkapel-university-of-amsterdam-about-the-thesis-tackling-wicked-problems-like-the-climate-crisis-requires-an-integrated-approach-that-addresses-supply-and-demand-side-dynamics-while-individual-behavioral-choices-play-a-critical-role-our-understanding-of-the-mechanisms-driving-these-decisions-and-how-they-shape-collective-outcomes-remains-incomplete-this-work-focuses-on-the-role-of-social-influence-amid-evolving-environmental-signals-and-inherent-uncertainty-and-how-these-forces-interact-with-population-heterogeneity-and-social-structures-to-shape-the-dynamics-of-collective-behavior-it-further-explores-how-policy-interventions-can-be-effectively-targeted-to-bring-about-social-transitions-by-accounting-for-these-complexities-using-game-theoretical-and-utility-based-frameworks-this-research-develops-theoretical-insights-and-demonstrates-how-empirical-data-can-inform-and-validate-models-illustrated-through-modelling-the-global-dynamics-of-mask-wearing-behavior-during-the-covid-19-pandemic-agent-based-models-complemented-by-analytical-formulations-bridge-the-gap-between-individual-level-behavior-and-emergent-macroscopic-dynamics-altogether-this-work-contributes-to-a-mechanistic-understanding-of-social-systems-and-supports-the-development-of-evidence-based-policies-aimed-at-stewarding-collective-behavior-toward-socially-beneficial-outcomes",
          title: 'PhD defence announcement: Dhruv Mittal I will defend my PhD thesis, Tipping the...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%64.%6D%69%74%74%61%6C@%75%76%61.%6E%6C", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/dhruv-m-114395114", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0002-6175-5610", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Dhruv_Mittal/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=LHoA110AAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
