exports.buildLocalePath = ({ locale, path }) => {
  const result = `${locale === 'pl' ? '' : locale}${path}`;

  return result === `/` ? result : result.replace(/\/$/, ``);
};
