// {i18n[locale].text}
import { i18n } from 'config/i18n';
import { useLocaleState } from 'providers/LocaleProvider/LocaleProvider';

export const useTranslations = ({ key }) => {
  const { activeLocale } = useLocaleState();

  if (key === undefined) {
    throw new Error('useTranslations => key is is required');
  }

  return i18n[activeLocale][key];
};
