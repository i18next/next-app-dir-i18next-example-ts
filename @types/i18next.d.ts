/**
 * If you want to enable locale keys typechecking and enhance IDE experience.
 *
 * Requires `resolveJsonModule:true` in your tsconfig.json.
 *
 * @link https://www.i18next.com/overview/typescript
 */
import 'i18next'

import type translation from '../app/i18n/locales/en/translation.json'
import type secondPage from '../app/i18n/locales/en/second-page.json'
import type footer from '../app/i18n/locales/en/footer.json'
import type clientPage from '../app/i18n/locales/en/client-page.json'
import type secondClientPage from '../app/i18n/locales/en/second-client-page.json'

interface I18nNamespaces {
  translation: typeof translation
  'second-page': typeof secondPage
  footer: typeof footer
  'client-page': typeof clientPage
  'second-client-page': typeof secondClientPage
}

declare module 'i18next' {
  interface CustomTypeOptions {
    // returnNull: false
    // defaultNS: 'translation'
    resources: I18nNamespaces
  }
}