import { Frontmatter } from '@/types';

export const MDX_META_DATA: Record<string, Frontmatter> = {
  NotFound: {
    title: '404',
    slug: '/404',
    hideHeader: true,
    hideInSearch: true,
    hideSiblings: true,
  },

  About: {
    title: 'About Mantine',
    slug: '/about',
    search: 'Browser support, releases cycle, previous versions documentation',
    hideSiblings: true,
    hideHeader: true,
  },

  GettingStarted: {
    title: 'Getting started',
    search: 'Getting started with Mantine',
    slug: '/getting-started',
    hideSiblings: true,
    hideHeader: true,
  },

  TemplatesUsage: {
    title: 'Getting started with a template',
    slug: '/templates-usage',
    hideInSearch: true,
    hideSiblings: true,
    hideHeader: true,
  },

  Overview: {
    title: 'Mantine API overview',
    slug: '/overview',
    search: 'Overview of Mantine components API',
    hideSiblings: true,
    hideHeader: true,
  },

  Contribute: {
    title: 'Contributing to Mantine',
    slug: '/contribute',
    search: 'Learn how to contribute to Mantine',
    hideSiblings: true,
    hideHeader: true,
  },

  SubmitTemplate: {
    title: 'Submit a template',
    slug: '/submit-template',
    search: 'Learn how to submit a template',
    hideSiblings: true,
    hideHeader: true,
  },

  Changelog700: {
    title: 'Version v7.0.0',
    slug: '/changelog/7-0-0',
    release: 'https://github.com/mantinedev/mantine/releases/tag/7.0.0',
    date: 'September 18th, 2023',
  },

  Changelog710: {
    title: 'Version v7.1.0',
    slug: '/changelog/7-1-0',
    release: 'https://github.com/mantinedev/mantine/releases/tag/7.1.0',
    date: 'September 28th, 2023',
  },

  Changelog720: {
    title: 'Version v7.2.0',
    slug: '/changelog/7-2-0',
    release: 'https://github.com/mantinedev/mantine/releases/tag/7.2.0',
    date: 'November 7th, 2023',
  },

  Changelog730: {
    title: 'Version v7.3.0',
    slug: '/changelog/7-3-0',
    release: 'https://github.com/mantinedev/mantine/releases/tag/7.3.0',
    date: 'December 5th, 2023',
  },

  PreviousChangelogs: {
    title: 'All releases',
    slug: '/changelog/previous-versions',
    hideHeader: true,
  },

  AllReleases: {
    title: 'All releases',
    slug: '/changelog/all-releases',
    hideHeader: true,
  },
};
