import Link from 'next/link'
import { useTranslation } from '../../i18n'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

export default async function Page({ params }: {
  params: Promise<{ lng: string; }>;
}) {
  let { lng } = await params
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(lng, 'second-page')
  return (
    <>
      <main>
        <Header
          heading={t('h1')}
        />
        <Link href={`/${lng}`}>
          <button type="button">
            {t('back-to-home')}
          </button>
        </Link>
      </main>
      <Footer lng={lng} path="/second-page" />
    </>
  )
}