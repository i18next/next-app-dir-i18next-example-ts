'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { FlatNamespace, KeyPrefix } from 'i18next'
import i18next from './i18next'
import { useTranslation, UseTranslationOptions, UseTranslationResponse, FallbackNs } from 'react-i18next'

const runsOnServerSide = typeof window === 'undefined'

export function useT<
  Ns extends FlatNamespace,
  KPrefix extends KeyPrefix<FallbackNs<Ns>> = undefined
>(
  ns?: Ns,
  options?: UseTranslationOptions<KPrefix>,
): UseTranslationResponse<FallbackNs<Ns>, KPrefix> {
  const lng = useParams()?.lng
  if (typeof lng !== 'string') throw new Error('useT is only available inside /app/[lng]')
  if (runsOnServerSide && i18next.resolvedLanguage !== lng) {
    i18next.changeLanguage(lng)
  } else {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [activeLng, setActiveLng] = useState(i18next.resolvedLanguage)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (activeLng === i18next.resolvedLanguage) return
      setActiveLng(i18next.resolvedLanguage)
    }, [activeLng, i18next.resolvedLanguage])
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      if (!lng || i18next.resolvedLanguage === lng) return
      i18next.changeLanguage(lng)
    }, [lng, i18next])
  }
  return useTranslation(ns, options)
}
