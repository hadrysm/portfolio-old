import locales from 'config/locales';

const { siteLanguage: defaultLang } = locales.find(({ default: isDefault }) => isDefault);

exports.buildLocalePath = ({ locale, path }) => {
  const result = `${locale === defaultLang ? '' : locale}${path}`;

  return result === `/` ? result : result.replace(/\/$/, ``);
};
