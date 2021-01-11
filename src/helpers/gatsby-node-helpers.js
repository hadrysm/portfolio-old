exports.buildLocalePath = ({ locale: { path: localePath }, path }) => {
  const result = `${localePath.toLowerCase()}${path}`;

  return result === `/` ? result : result.replace(/\/$/, ``);
};
