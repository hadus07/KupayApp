import I18n from "react-native-i18n";

import en from './screens/Locales/en';
import uz from './screens/Locales/uz';
import ru from './screens/Locales/ru';
import ko from './screens/Locales/ko';

I18n.fallbacks = true;
I18n.translations = {en, uz, ko, ru};

export default I18n;