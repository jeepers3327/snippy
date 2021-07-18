import { languages, defaultLanguage } from './languages';

export const getAvatarId = () => {
  return String(Math.floor(Math.random() * 20 + 1));
};

export const findLanguage = (filename: string) => {
  const meta = filename.split('.');

  if (meta.length > 1) {
    const extension = meta[meta.length - 1]!;
    const language = languages.find((lang) =>
      lang.extensions.includes(`.${extension}`)
    );

    if (language) {
      return language.language;
    }
    return defaultLanguage;
  }

  return defaultLanguage;
};

export const openRawCodeDialog = (snippet: string) => {
  const newWindow = window.open('', 'Test', 'height=600,width=450');
  if (newWindow) {
    const newDocument = newWindow.document;
    const preTag = newDocument.createElement('pre');
    preTag.innerText = snippet;
    newDocument.body.appendChild(preTag);
    newWindow.focus();
  }
};
