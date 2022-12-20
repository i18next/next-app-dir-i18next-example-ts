import { createInstance, Namespace, KeyPrefix } from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { initReactI18next } from 'react-i18next/initReactI18next'
import { getOptions } from './settings'

const initI18next = async (lng: string, ns: string | string[]) => {
  // on server side we create a new instance for each render, because during compilation everything seems to be executed in parallel
  const i18nInstance = createInstance()
  await i18nInstance
    .use(initReactI18next)
    .use(resourcesToBackend((language, namespace) => import(`./locales/${language}/${namespace}.json`)))
    .init(getOptions(lng, ns))
  return i18nInstance
}

export async function useTranslation<
  N extends Namespace,
  TKPrefix extends KeyPrefix<N>,
>(
  lng: string,
  ns?: N,
  options: { keyPrefix?: TKPrefix } = {}
) {
  const i18nextInstance = await initI18next(lng, Array.isArray(ns) ? ns as string[] : ns as string)
  return {
    // TODO: solve TKPrefix problem here...
    t: i18nextInstance.getFixedT(lng, ns/*, options.keyPrefix*/),
    i18n: i18nextInstance
  }
}
