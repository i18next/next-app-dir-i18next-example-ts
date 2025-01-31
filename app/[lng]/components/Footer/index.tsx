import { useTranslation } from '../../../i18n'
import { FooterBase } from './FooterBase'

export const Footer = async ({ lng, path }: {
  lng: string;
  path?: string;
}) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t, i18n } = await useTranslation(lng, 'footer')
  return <FooterBase i18n={i18n} lng={lng} path={path} />
}
