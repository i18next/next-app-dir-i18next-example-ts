import { languages, fallbackLng } from '../../i18n/settings'
import { useTranslation } from '../../i18n'

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}

export async function generateMetadata({ params }: {
  params: Promise<{ lng: string; }>;
}) {
  let { lng } = await params
  if (languages.indexOf(lng) < 0) lng = fallbackLng
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(lng, 'second-page')
  return {
    title: t('title')
  }
}

export default function Layout({ children }: {
  children: React.ReactNode;
  params: Promise<{ lng: string; }>;
}) {
  return children
}
