/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en'],
  },
  title: 'Irrah Tech Docs',
  tagline: 'Documentação completa dos produtos',
  url: 'https://www.grupoirrah.com.br/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://www.irrahtech.io/wp-content/themes/irrahtech/favicon.png',
  organizationName: 'Irrah Tech',
  projectName: 'irrahtech-docs',
  themeConfig: {
    navbar: {
      logo: {
        alt: 'Irrah Tech Logo',
        src: 'img/irrah.png',
      },
      items: [],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl: "https://github.com/IrrahTech/irrahtech-docs/tree/main",
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
