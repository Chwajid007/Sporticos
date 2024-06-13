import LocalizedStrings from 'react-native-localization';
import french from './french';
import spanish from './spanish';
import english from './english';
import vietnamese from './vietnamese';

let strings = new LocalizedStrings({
  fr: french,
  es: spanish,
  en: english,
  vt: vietnamese,
});
export default strings;
