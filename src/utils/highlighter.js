import grammer from '../styles/grammar-tact.json';
import cssVariables from '../styles/css-variables.json';
import { getHighlighter, setCDN } from 'shiki';

setCDN(import.meta.env.MODE === 'development' ? '/shiki/' : '/eventon-frontend/shiki/');

/**
 *
 * @param {string} code
 * @returns {string}
 */
export const highlightTactCode = async (code) => {
  return getHighlighter({
    theme: cssVariables,
    paths: {
      wasm: '/',
    },
    langs: [
      {
        id: 'tact',
        scopeName: 'source.tact',
        grammar: grammer,
        path: '',
      },
    ],
  })
    .then((highlighter) => highlighter.codeToHtml(code, { lang: 'tact' }))
    .catch((e) => {
      console.error(e);
      return '';
    });
};
