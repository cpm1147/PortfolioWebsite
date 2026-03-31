/// <reference types="node" />

import fs from 'fs';
import path from 'path';

const targetPath = path.join(__dirname, '../src/environments/environment.prod.ts');

const envConfigFile = `export const environment = {
  production: true,
  emailJsServiceId: '${process.env['EMAILJS_SERVICE_ID'] || ''}',
  emailJsTemplateId: '${process.env['EMAILJS_TEMPLATE_ID'] || ''}',
  emailJsPublicKey: '${process.env['EMAILJS_PUBLIC_KEY'] || ''}',
  recaptchaSiteKey: '${process.env['RECAPTCHA_SITE_KEY'] || ''}'
};
`;

fs.writeFileSync(targetPath, envConfigFile);
console.log('Environment.prod.ts updated.');