module.exports = {
    title: 'eth-docker',
    tagline: 'Ethereum  Docker Client',
    url: 'https://github.com/eth2-educators/eth2-docker-docs',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    favicon: 'img/eth2-moby-logo.png',
    organizationName: 'Eth Docker',
    projectName: 'eth-docker',
    customFields: {
        image: 'img/eth2-moby-logo.png',
    },
    scripts: ['https://buttons.github.io/buttons.js'],
    themeConfig: {
        navbar: {
            title: "eth-docker Docs",
            logo: {
                alt: "eth-docker logo",
                href: '/docs/About/Overview',
                src: 'img/eth2-moby-logo.png',
            },
            items: [
                {
                    href: 'https://github.com/eth2-educators/eth2-docker-docs',
                    label: 'Get Started',
                    position: 'right',
                }
            ],
        },
        footer: {
            logo: {
                alt: "eth-docker logo",
                href: '/',
                src: 'img/eth2-moby-logo.png',
            },
            copyright: `Copyright © ${new Date().getFullYear()} eth-docker contributors`,
            links: [],
        },
        algolia: {
            apiKey: 'a51366ded1891d634408de0e1e4cf1c5',
            indexName: 'eth-docker',
            algoliaOptions: { 'facetFilters': ["type:content", "version:current"] }
        }
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    path: './docs',
                    routeBasePath: 'docs',
                    sidebarPath: require.resolve('./sidebars.json'),
                    editUrl: 'https://github.com/eth2-educators/eth2-docker-docs/edit/main/website/',
                },
                // theme: {
                //     customCss: require.resolve('./src/css/custom.css'),
                // },
                sitemap: {
                    cacheTime: 600 * 1000,
                    changefreq: 'weekly',
                    priority: 0.5,
                },
            },
        ],
    ],
};
