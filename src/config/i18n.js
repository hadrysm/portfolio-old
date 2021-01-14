import { pageTheme } from 'assets/styles/theme';

export const i18n = {
  en: {
    menu: [
      { label: 'Home', path: '/', color: pageTheme.home },
      { label: 'Projects', path: '/projects', color: pageTheme.projects },
      { label: 'Blog', path: '/blog', color: pageTheme.blog },
    ],
    about: {
      title: 'About me',
    },
    technologies: {
      title: 'Technologies',
    },
    contact: {
      title: 'Contact',
      email: 'Email adress',
      message: 'Your message',
    },
    projects: {
      title: 'Projects',
    },
    buttons: {
      check: 'Check projects',
      send: 'Send',
    },
  },

  pl: {
    menu: [
      { label: 'Strona główna', path: '/', color: pageTheme.home },
      { label: 'Projekty', path: '/projekty', color: pageTheme.projects },
      { label: 'Blog', path: '/blog', color: pageTheme.blog },
    ],
    about: {
      title: 'O mnie',
    },
    technologies: {
      title: 'Technologie',
    },
    contact: {
      title: 'Kontakt',
      email: 'Adres email',
      message: 'Twoja wiadomość',
    },
    projects: {
      title: 'Projekty',
    },
    buttons: {
      check: 'Zobacz projekty',
      send: 'Wyślij',
    },
  },
};
