import { getT } from '../../../i18n'
import { FooterBase } from './FooterBase'

export const Footer = async ({ path }: {
  path?: string;
}) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { i18n } = await getT('footer')
  return <FooterBase i18n={i18n} lng={i18n.resolvedLanguage} path={path} />
}
