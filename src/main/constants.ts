import * as path from 'path';

const lulumiRootPath = process.env.NODE_ENV === 'development'
  ? path.resolve(__dirname, '../../')
  : path.resolve(__dirname, '../');
const lulumiHelperPath = path.resolve(lulumiRootPath, 'src', 'helper');

export default {
  lulumiRootPath,
  lulumiHelperPath,
  devUserData: `${path.resolve(lulumiRootPath, 'userData')}`,
  testUserData: `${path.resolve(lulumiRootPath, 'test', 'userData')}`,
  lulumiPagesCustomProtocol: 'lulumi://',
  lulumiPreloadPath: `${path.resolve(lulumiRootPath, 'dist')}`,
  lulumiPagesPath: `${path.resolve(lulumiHelperPath, 'pages')}`,
  lulumiPDFJSPath: `${path.resolve(lulumiHelperPath, 'pdfjs')}`,
  lulumiRev: 'd23cafdeb2450eb45bc6b2eaad26255043314494',
};
