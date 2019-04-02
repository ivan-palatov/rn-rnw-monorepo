/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
import path from 'path';

const extraNodeModules = {
  '@mono/common': path.resolve(__dirname + '/../common/'),
};

const watchFolders = [path.resolve(__dirname + '/../common/')];

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  resolver: {
    extraNodeModules,
  },
  watchFolders,
};
