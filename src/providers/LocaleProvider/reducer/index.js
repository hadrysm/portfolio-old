import { UPDATE_LOCALE } from './types';

const localeReducer = (state, { type, payload }) => {
  switch (type) {
    case UPDATE_LOCALE:
      return {
        ...state,
        activeLocale: payload.locale,
      };
    default:
      throw new Error('Invalid action');
  }
};

export { localeReducer };
