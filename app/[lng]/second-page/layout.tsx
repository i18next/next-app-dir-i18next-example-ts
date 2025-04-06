import { languages } from '../../i18n/settings'
import { getT } from '../../i18n'

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export async function generateMetadata() {
  const { t } = await getT('second-page')
  return {
    title: t('title')
  }
}

export default function Layout({ children }: {
  children: React.ReactNode;
}) {
  return children
}
