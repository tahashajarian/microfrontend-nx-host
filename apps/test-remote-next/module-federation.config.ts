import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'test-remote-next',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
