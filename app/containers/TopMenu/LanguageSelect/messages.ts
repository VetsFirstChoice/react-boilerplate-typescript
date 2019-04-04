/*
 * NotFoundPage Messages
 *
 * This contains all the text for the NotFoundPage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.LanguageSelect';

export default defineMessages({
  english: {
    id: `${scope}.english`,
    defaultMessage: 'English',
  },
  french: {
    id: `${scope}.french`,
    defaultMessage: 'French',
  },
  chinese: {
    id: `${scope}.chinese`,
    defaultMessage: 'Chinese',
  },
});
