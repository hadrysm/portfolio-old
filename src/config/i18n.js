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
      form: {
        email: 'Email adress',
        message: 'Your message',
        emailMesssage: 'Invalid email',
        requiredMessage: 'Required',
        response: {
          success: 'Message sent',
          error: 'Something went wrong :(',
        },
      },
    },
    projects: {
      title: 'Projects',
    },
    footer: {
      text: `${new Date().getFullYear()} Mateusz Hadryś. - All rights reserved.`,
    },
    aboutProject: {
      title: 'About the project',
    },
    buttons: {
      check: 'Check projects',
      send: 'Send',
      more: 'See more on GitHub',
      back: 'Go back',
      live: 'Check live',
      code: '<Code />',
    },
    notFound: {
      title: '404: Not Found',
      text: 'The given address does not exist.',
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
      form: {
        email: 'Adres email',
        message: 'Twoja wiadomość',
        emailMesssage: 'Niepoprawy adres email',
        requiredMessage: 'Wymagane pole',
        response: {
          success: 'Wiadomość wysłana',
          error: 'Coś poszło nie tak :(',
        },
      },
    },
    projects: {
      title: 'Projekty',
    },
    footer: {
      text: `${new Date().getFullYear()} Mateusz Hadryś. - Wszelkie prawa zastrzeżone.`,
    },
    aboutProject: {
      title: 'O projekcie',
    },
    buttons: {
      check: 'Zobacz projekty',
      send: 'Wyślij',
      more: 'Więcej na GitHub!',
      back: 'Powrót',
      live: 'Zobacz live',
      code: '<Kod źródłowy />',
    },
    notFound: {
      title: '404: Nie znaleziono',
      text: 'Podany adres nie istnieje.',
    },
  },
};
