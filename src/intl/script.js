import * as fs from 'fs';
import locale from './locale';

const PUBLIC_PATH = 'src/intl/languages';
const LANG_FOLDER_PATH = 'src/intl/languages';

const translation = {};

for (const prop in locale) {
  if (locale.hasOwnProperty(prop)) {
    translation[locale[prop].id] = locale[prop].defaultMessage;
  }
}
// Copy the default en-us language file to /public
fs.writeFileSync(`${PUBLIC_PATH}/en-us.json`, JSON.stringify(translation, null, 2));
