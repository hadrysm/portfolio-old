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
    learn: {
      title: 'What did I learn?',
    },
    buttons: {
      check: 'Check projects',
      send: 'Send',
      more: 'See more on GitHub',
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
    learn: {
      title: 'Czego się nauczyłem?',
    },
    buttons: {
      check: 'Zobacz projekty',
      send: 'Wyślij',
      more: 'Więcej na GitHub!',
    },
  },
};
