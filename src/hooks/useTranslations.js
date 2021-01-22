// {i18n[locale].text}
import { i18n } from 'config/i18n';
import { useLocaleState } from 'providers/LocaleProvider/LocaleProvider';

export const useTranslations = () => {
  const { activeLocale } = useLocaleState();

  return i18n[activeLocale];
};
