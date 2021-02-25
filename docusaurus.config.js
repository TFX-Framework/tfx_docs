module.exports = {
  title: "ToxicFX",
  tagline: "The Roleplay Framework that every FiveM Server needs.",
  url: "https://tfx.toxicdev.me",
  baseUrl: "/",
  baseUrlIssueBanner: true,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: "img/0D59460B-7183-4CC4-BCA7-ABF32BBC5FB4.png",
  organizationName: "TFX-Framework",
  projectName: "tfx_docs",
  themeConfig: {
    hideableSidebar: true,
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
        switchConfig: {
        darkIcon: "🌛",
        darkIconStyle: {},
        lightIcon: "🌞",
        lightIconStyle: {},
      },
    },
    /*announcementBar: {
      id: 'supportus',
      content:
        '⭐️ If you like TFX, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/TFX-Framework/tfx_main">GitHub</a>! ⭐️',
    },*/
    navbar: {
      title: "TFX",
      logo: {
        alt: "TFX Logo",
        src:
          "img/0D59460B-7183-4CC4-BCA7-ABF32BBC5FB4.png"
      },
      items: [
        {
          to: "docs/getting-started",
          activeBasePath: "docs/getting-started",
          label: "Documentation",
          position: "left"
        },
        { 
          to: "blog", 
          label: "Updates", 
          position: "right" 
        },
        {
          href: "https://tfx.toxicdev.me/discord",
          position: "right",
          label: "Discord"
        },
        {
          href: "https://github.com/TFX-Framework",
          position: "right",
          label: "GitHub"
        },
        {
        to: "docs/faqs/index",
          activeBasePath: "docs/faqs/index",
          label: "FAQs",
          position: "left"
        },
       {
        to: "docs/legal/terms",
          activeBasePath: "docs/legal/terms",
          label: "Terms of Service",
          position: "left"
        },
       {
        to: "docs/legal/privacy",
          activeBasePath: "docs/legal/privacy",
          label: "Privacy Policy",
          position: "left"
        }
      ]
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Toxic Dev | TFX`
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/TFX-Framework/tfx_docs/edit/master/",
          //editCurrentVersion: false,
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,

        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
}
