import Link from 'next/link'
import { ReactNode } from 'react'
import { fallbackLng } from '../../../i18n/settings'

export const LinkBase = ({ lng = fallbackLng, href = '', children }: { lng?: string; href?: string; children: ReactNode }) => {
  return <Link href={`/${lng}/${href}`}>{children}</Link>
}
