// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Peer-reviewed publications in reversed chronological order. Greatly indebted to all my co-authors, supervisors, and collaborators for their invaluable contributions.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-research",
          title: "Research",
          description: "A list of some of my research works.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-education",
          title: "Education",
          description: "A brief description of my academic journey (so far). Forever in debt of all of my teachers.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/education/";
          },
        },{id: "nav-work",
          title: "Work",
          description: "A list of all of my professional experiences so far.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/work/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Click the button on the right to download a PDF version. For more information, feel free to drop an email.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "news-landed-my-first-job-as-a-full-time-lecturer-in-cse-department-of-brac-university-hello-academia",
          title: 'Landed my first job as a full-time lecturer in CSE department of BRAC...',
          description: "",
          section: "News",},{id: "news-my-first-authored-paper-xlnet-cnn-has-received-the-best-paper-award-in-nsyss-2024",
          title: 'My first-authored paper XLNet-CNN has received the Best paper award in NSysS 2024!...',
          description: "",
          section: "News",},{id: "news-my-undergrad-thesis-paper-5gpt-has-been-published-in-ieee-transactions-on-information-forensics-and-security-a-premier-journal-in-the-field-of-computer-security-with-an-impact-factor-of-8-0",
          title: 'My undergrad thesis paper, 5GPT, has been published in IEEE Transactions on Information...',
          description: "",
          section: "News",},{id: "news-my-first-authored-paper-inceptive-transformers-has-been-accepted-for-presentation-in-the-main-conference-of-emnlp-2025-see-you-all-in-suzhou",
          title: 'My first-authored paper Inceptive Transformers has been accepted for presentation in the main...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%73%69%66.%61%73%72%31%31@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/asif-shahriar-0135a82a8", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=JzWK7fS2qRUC", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://cse.sds.bracu.ac.bd/faculty_profile/346/asif_shahriar", "_blank");
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
