import { FleekConfig } from '@fleek-platform/sdk';

export const config: FleekConfig = {
  sites: [
    {
      slug: 'vamsi-penmetsa-portfolio',
      distDir: './dist',
      buildCommand: 'npm run build:ipfs',
    },
  ],
};
