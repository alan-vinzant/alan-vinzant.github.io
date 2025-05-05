// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'alan-vinzant', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 2, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['alan-vinzant/genome-assembly-and-annotation', 'alan-vinzant/microbiometutorial'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Observing Seasonal Differences in Red Hills Roach Behavior',
          description:
            'The red hills roach is a small cyprinid fish that is endemic to perennial pools in California. Very little is recorded on these fish, and their limited habitat makes them of concern for conservation.',
          imageUrl:
            'https://github.com/alan-vinzant/alan-vinzant.github.io/raw/main/Individual%20Project%20-%20Alan%20Vinzant%20-%20Red%20Hills.png',
          link: 'https://github.com/alan-vinzant/alan-vinzant.github.io/raw/main/Observing%20Seasonal%20Differences%20in%20Red%20Hills%20Roach%20Behavior.pdf',
        },
        {
          title: 'Invasive Characteristics of Opossum Shrimp in North America',
          description:
            'Opossum shrimp of the order Mysida have nbeen introduced, both deliberately and accidentally, to detrimental effect. This infographic helps to identify the cause of the problem and possible avenues to a solution.',
          imageUrl:
            'https://github.com/alan-vinzant/alan-vinzant.github.io/raw/main/Screenshot%202025-04-30%20092250.png',
          link: 'https://github.com/alan-vinzant/alan-vinzant.github.io/raw/main/Opossum%20Shrimp%20Invasive%20Species.pdf',
        },
      ],
    },
  },
  seo: {
    title: 'Projects page for Alan Vinzant',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'alan-vinzant-60b82b287',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'avinzant@csustan.edu',
  },
  resume: {
    fileUrl:
      'https://github.com/alan-vinzant/alan-vinzant.github.io/raw/main/VinzantCV.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PCR',
    'Agarose Gel',
    'Bioinformatics',
    'Field notetaking',
    'Redox reactions',
    'Field work, field notes',
    'Collecting and preserving herbarium specimens',
  ],
  experiences: [
    {
      company: 'Edible Arrangements',
      position: 'General Manager',
      from: 'March 2018',
      to: 'January 2024',
      companyLink: '',
    },
    {
      company: 'Self-Employed',
      position: 'BPA Property Inspector',
      from: 'April 2011',
      to: 'July 2019',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com',
    },
  ],
  educations: [
    {
      institution: 'California State University Stanislaus',
      degree: 'B. S. Biological Sciences',
      from: '2023',
      to: '2025',
    },
    {
      institution: 'San Joaquin Delta College',
      degree: 'A. S. Science and Mathematics',
      from: '2016',
      to: '2018',
    },
  ],
  publications: [
    {
      title: 'Draft genome sequence of Phascolarctobacterium faecium DSM 14760 isolated from koala feces in Australia',
      conferenceName: '',
      journalName: 'Microbiology Resource Announcement',
      authors: 'Ciara Blanco, Vignesh Lal, Evelyn Valdovinos, Alan Vinzant',
      link: 'https://github.com/alan-vinzant/alan-vinzant.github.io/raw/main/MRA_Announcement_Phascolarctos_faecium_(1).pdf',
      description:
        'This is a manuscript in preparation. Phascolarctobacterium faecium was originally isolated from koala feces in 1992. Here, we sequence and analyze the type strain, with a length of 2,317,131 bp, 27 contigs, and average G+C content of 43.73%, and three virulence factors that are potential health hazards to humans',
    },
    {
      title: 'Publication Title',
      conferenceName: 'Conference Name',
      journalName: '',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
