const path = require('path');

/**
 * Pick configuration related to 'src code / module path' from TypeScript configuration file ('tsconfig.json') 
 * ++++Very rough, quick & dirty.
 * 
 * ++++Instead, consider maybe trying some lib like,
 *       https://github.com/dividab/tsconfig-paths,
 *       https://github.com/dividab/tsconfig-paths-webpack-plugin
 * 
 * @author k
 * @since 2023-01-15
 */

/**
 * @public
 * 
 * Merge webpack aliases with the ones that were read from TsConfig. 
 * 
 * @param {Array|undefined|null} dstWebpackAliases 
 * @param {Array} srcTsAliases
 *  
 * @returns {Array|undefined|null}
 */
function supplementWithTsAliases(dstWebpackAliases, srcTsAliases) {
  dstWebpackAliases = { 
    ...dstWebpackAliases,
    ...srcTsAliases
  };

  return dstWebpackAliases;
}

/**
 * @public
 * 
 * Read code path aliases from TsConfig.
 * 
 * Convert aliases provided by the TsConfig into alias suitable for Webpack.
 * 
 * @param {String} projectRootDirAbsPath
 * @param {Object} options
 * @return {Object|null}
 */
function readPathsFromTsConfig(projectRootDirAbsPath, options = {}) {
  const { baseUrl = null, paths = null } = options;

  if (!baseUrl) {
    return null;
  }

  if (!paths) {
    return null;
  }

  const srcPaths = paths;

  let res = {};

  for (const [keyA, entryA] of Object.entries(srcPaths)) {
    const entryB = iterateValueArray(projectRootDirAbsPath, baseUrl, entryA);

    const keyB = keyA.replace('/*', '');
    res[keyB] = entryB;
  }

  return res;
}

/**
 * @private
 * 
 * Convert an alias provided by the TsConfig into alias suitable for Webpack. 
 * 
 * @param {String} projectRootDirAbsPath 
 * @param {String} baseUrlArg 
 * @param {Array|String} pathArr 
 * @returns {Array|String}
 */
function iterateValueArray(projectRootDirAbsPath, baseUrlArg, pathArr) {
  if (!Array.isArray(pathArr)) {
    // considering it's a string
    return pathArr; 
  }

  const rootDir = projectRootDirAbsPath;

  const resolvedBaseUrl = path.resolve(rootDir, baseUrlArg);

  let res = [];

  for (const keyA in pathArr) {
    const entryA = pathArr[keyA];
    const entryB = path.join(resolvedBaseUrl, entryA);
    const entryD = entryB.replace('*', '');

    res[keyA] = entryD;
  }

  return res;
}

module.exports = {
  supplementWithTsAliases,
  readPathsFromTsConfig,
};
