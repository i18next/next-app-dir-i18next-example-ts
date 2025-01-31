'use client'

import * as React from 'react'
import Link from 'next/link'
import { useTranslation } from '../../i18n/client'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer/client'

export default function Page({ params }: {
  params: Promise<{ lng: string; }>;
}) {
  const { lng } = React.use<{ lng: string }>(params)
  const { t } = useTranslation(lng, 'second-client-page')
  return (
    <>
      <main>
        <Header heading={t('h1')} />
        <Link href={`/${lng}`}>
          <button type="button">
            {t('back-to-home')}
          </button>
        </Link>
      </main>
      <Footer lng={lng} path="/second-client-page" />
    </>
  )
}