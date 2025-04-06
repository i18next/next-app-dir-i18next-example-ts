'use client'

import { FooterBase } from './FooterBase'
import { useT } from '../../../i18n/client'

export function Footer({ path }: {
  path: string;
}) {
  const { i18n } = useT('footer')
  return <FooterBase i18n={i18n} lng={i18n.resolvedLanguage} path={path} />
}
